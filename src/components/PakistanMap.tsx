import { useState } from "react";
import { cities, incidents, incidentTypeMeta, type City, type SafetyIncident } from "@/lib/data";
import { roads, roadTypeMeta } from "@/lib/roads";
import { subAreas, getSubAreaPosition, type SubArea } from "@/lib/subAreas";

type Props = {
  selectedCity: string | null;
  onSelectCity: (cityId: string) => void;
  filter: "all" | "danger" | "safe";
};

type HoveredItem =
  | { type: "city"; data: City }
  | { type: "incident"; data: SafetyIncident }
  | { type: "subarea"; data: SubArea }
  | null;

export default function PakistanMap({ selectedCity, onSelectCity, filter }: Props) {
  const [hovered, setHovered] = useState<HoveredItem>(null);
  const [showSubAreas, setShowSubAreas] = useState(true);

  const cityIncidents = (cityName: string) =>
    incidents.filter((i) => i.city === cityName);

  const cityMatchesFilter = (city: City) => {
    if (filter === "all") return true;
    const incs = cityIncidents(city.name);
    if (filter === "danger") return incs.some((i) => i.severity === "high");
    if (filter === "safe") return incs.some((i) => i.type === "safe_area");
    return true;
  };

  const subAreaMatchesFilter = (sa: SubArea) => {
    if (filter === "all") return true;
    if (filter === "danger") return sa.safetyScore < 50;
    if (filter === "safe") return sa.safetyScore >= 75;
    return true;
  };

  const roadColor = (type: string) => roadTypeMeta[type as keyof typeof roadTypeMeta]?.color || "#475569";

  // Get roads that belong to a specific city for drawing intra-city lines
  const cityRoads = (cityName: string) => roads.filter((r) => r.city === cityName);

  // Draw a road line between two connected roads within the same city
  const getRoadLine = (road: (typeof roads)[number], connectedName: string) => {
    const connected = roads.find((r) => r.name === connectedName && r.city === road.city);
    if (!connected) return null;
    const city = cities.find((c) => c.name === road.city);
    if (!city) return null;
    // Spread roads around the city center using a hash of their names
    const hash1 = road.name.charCodeAt(0) + road.name.charCodeAt(1);
    const hash2 = connected.name.charCodeAt(0) + connected.name.charCodeAt(1);
    return {
      x1: city.x + ((hash1 % 7) - 3) * 0.5,
      y1: city.y + ((hash1 % 5) - 2) * 0.4,
      x2: city.x + ((hash2 % 7) - 3) * 0.5,
      y2: city.y + ((hash2 % 5) - 2) * 0.4,
      type: road.type,
    };
  };

  // Get tooltip position
  function getTooltipPos(item: NonNullable<HoveredItem>): { left: string; top: string } {
    if (item.type === "city") {
      return { left: `${item.data.x}%`, top: `${item.data.y}%` };
    }
    if (item.type === "incident") {
      const city = cities.find((c) => c.name === item.data.city);
      return { left: `${city?.x ?? 50}%`, top: `${city?.y ?? 50}%` };
    }
    // subarea
    const pos = getSubAreaPosition(item.data);
    return { left: `${pos.x}%`, top: `${pos.y}%` };
  }

  const tooltipPos = hovered ? getTooltipPos(hovered) : null;

  return (
    <div className="relative w-full aspect-[4/5] max-w-[680px] mx-auto">
      {/* Sub-area toggle */}
      <div className="absolute top-2 right-2 z-10">
        <button
          onClick={() => setShowSubAreas(!showSubAreas)}
          className={`text-[10px] px-2.5 py-1 rounded-full border transition-all ${
            showSubAreas
              ? "border-sky-500/40 bg-sky-500/15 text-sky-300"
              : "border-slate-700 text-slate-400 bg-slate-900/60"
          }`}
        >
          {showSubAreas ? "Sub-areas ON" : "Sub-areas OFF"}
        </button>
      </div>

      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="0.6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="subGlow">
            <feGaussianBlur stdDeviation="0.3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Pakistan outline */}
        <path
          d="M62,6 L58,7 L54,9 L52,13 L50,16 L46,18 L44,22 L40,24 L37,28 L34,30 L31,30 L28,32 L25,35 L22,38 L20,42 L18,46 L20,50 L22,53 L20,56 L22,59 L25,61 L27,64 L30,67 L33,70 L37,72 L40,75 L42,78 L44,82 L47,84 L50,83 L52,80 L55,78 L58,76 L60,73 L62,70 L64,67 L62,64 L60,60 L62,56 L64,52 L66,48 L64,44 L62,40 L60,36 L62,32 L64,28 L62,24 L60,20 L62,16 L64,12 L62,8 Z"
          fill="url(#mapGradient)"
          stroke="#334155"
          strokeWidth="0.4"
          strokeLinejoin="round"
        />

        {/* Province divider lines */}
        <line x1="45" y1="28" x2="48" y2="58" stroke="#334155" strokeWidth="0.25" strokeDasharray="1,1" />
        <line x1="48" y1="58" x2="30" y2="65" stroke="#334155" strokeWidth="0.25" strokeDasharray="1,1" />
        <line x1="58" y1="15" x2="60" y2="45" stroke="#334155" strokeWidth="0.25" strokeDasharray="1,1" />

        {/* Province labels */}
        <text x="40" y="48" fill="#475569" fontSize="2.2" textAnchor="middle" className="font-sans select-none">Balochistan</text>
        <text x="55" y="50" fill="#475569" fontSize="2.2" textAnchor="middle" className="font-sans select-none">Punjab</text>
        <text x="28" y="55" fill="#475569" fontSize="2.2" textAnchor="middle" className="font-sans select-none">Sindh</text>
        <text x="58" y="18" fill="#475569" fontSize="2" textAnchor="middle" className="font-sans select-none">KP</text>
        <text x="60" y="9" fill="#475569" fontSize="2" textAnchor="middle" className="font-sans select-none">GB</text>
        <text x="67" y="22" fill="#475569" fontSize="2" textAnchor="middle" className="font-sans select-none">AJK</text>

        {/* Inter-city road network (highway connections) */}
        {cities.slice(0, -1).map((city, i) => {
          const next = cities[(i + 1) % cities.length];
          return (
            <line
              key={`hwy-${i}`}
              x1={city.x}
              y1={city.y}
              x2={next.x}
              y2={next.y}
              stroke="#1e3a5f"
              strokeWidth="0.35"
              strokeDasharray="0.5,0.5"
              opacity={0.6}
            />
          );
        })}

        {/* Intra-city road sketches — draw lines for connected roads within each city */}
        {cities.map((city) => {
          const cityRds = cityRoads(city.name);
          const lines: React.ReactElement[] = [];
          const drawn = new Set<string>();
          cityRds.forEach((road) => {
            road.connectsTo.forEach((connName) => {
              const key = `${road.name}|${connName}`.split("").sort().join("");
              if (drawn.has(key)) return;
              drawn.add(key);
              const lineData = getRoadLine(road, connName);
              if (!lineData) return;
              lines.push(
                <line
                  key={`${city.id}-rd-${key}`}
                  x1={lineData.x1}
                  y1={lineData.y1}
                  x2={lineData.x2}
                  y2={lineData.y2}
                  stroke={roadColor(road.type)}
                  strokeWidth="0.2"
                  opacity={0.35}
                />
              );
            });
          });
          return <g key={`city-rds-${city.id}`}>{lines}</g>;
        })}

        {/* Sub-area markers */}
        {showSubAreas &&
          subAreas.filter(subAreaMatchesFilter).map((sa) => {
            const pos = getSubAreaPosition(sa);
            const color =
              sa.safetyScore >= 75 ? "#22c55e" :
              sa.safetyScore >= 55 ? "#eab308" :
              sa.safetyScore >= 40 ? "#f97316" : "#ef4444";
            return (
              <g key={sa.id}>
                {sa.safetyScore < 45 && (
                  <circle cx={pos.x} cy={pos.y} r="1.5" fill={color} opacity="0.1">
                    <animate attributeName="r" values="1;2;1" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                )}
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="0.7"
                  fill={color}
                  opacity={0.8}
                  filter="url(#subGlow)"
                  className="cursor-pointer"
                  onMouseEnter={() => setHovered({ type: "subarea", data: sa })}
                  onMouseLeave={() => setHovered(null)}
                />
                {selectedCity && cities.find((c) => c.id === selectedCity)?.name === sa.city && (
                  <text
                    x={pos.x}
                    y={pos.y - 1}
                    fill="#94a3b8"
                    fontSize="1"
                    textAnchor="middle"
                    className="font-sans select-none pointer-events-none"
                  >
                    {sa.name.length > 12 ? sa.name.substring(0, 11) + "…" : sa.name}
                  </text>
                )}
              </g>
            );
          })}

        {/* Incident markers */}
        {incidents.map((inc) => {
          const city = cities.find((c) => c.name === inc.city);
          if (!city) return null;
          if (filter === "danger" && inc.severity !== "high") return null;
          if (filter === "safe" && inc.type !== "safe_area") return null;
          const meta = incidentTypeMeta[inc.type];
          const offsetX = (inc.id.charCodeAt(inc.id.length - 1) % 5) - 2;
          const offsetY = (inc.id.charCodeAt(inc.id.length - 2) % 5) - 2;
          return (
            <g key={inc.id}>
              {inc.severity === "high" && (
                <circle cx={city.x + offsetX} cy={city.y + offsetY} r="2.5" fill={meta.color} opacity="0.15">
                  <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={city.x + offsetX}
                cy={city.y + offsetY}
                r={inc.severity === "high" ? 1.2 : 0.9}
                fill={meta.color}
                filter="url(#glow)"
                className="cursor-pointer"
                onMouseEnter={() => setHovered({ type: "incident", data: inc })}
                onMouseLeave={() => setHovered(null)}
              />
            </g>
          );
        })}

        {/* City markers */}
        {cities.map((city) => {
          const isSelected = selectedCity === city.id;
          const matches = cityMatchesFilter(city);
          const scoreColor =
            city.safetyScore >= 80 ? "#22c55e" :
            city.safetyScore >= 70 ? "#eab308" :
            city.safetyScore >= 60 ? "#f97316" : "#ef4444";
          return (
            <g
              key={city.id}
              className="cursor-pointer transition-all"
              onClick={() => onSelectCity(city.id)}
              onMouseEnter={() => setHovered({ type: "city", data: city })}
              onMouseLeave={() => setHovered(null)}
              opacity={matches ? 1 : 0.3}
            >
              {isSelected && (
                <circle cx={city.x} cy={city.y} r="3.5" fill="none" stroke="#38bdf8" strokeWidth="0.4">
                  <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
                </circle>
              )}
              <circle
                cx={city.x}
                cy={city.y}
                r={isSelected ? 2 : 1.5}
                fill={scoreColor}
                stroke="#0f172a"
                strokeWidth="0.3"
                filter="url(#glow)"
              />
              <text
                x={city.x}
                y={city.y - 2.5}
                fill={isSelected ? "#f8fafc" : "#94a3b8"}
                fontSize="1.8"
                textAnchor="middle"
                className="font-sans select-none"
              >
                {city.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Hover tooltip */}
      {hovered && tooltipPos && (
        <div
          className="absolute z-20 pointer-events-none bg-slate-900/95 border border-slate-700 rounded-lg px-3 py-2 text-xs shadow-xl backdrop-blur-sm max-w-[220px]"
          style={{
            left: tooltipPos.left,
            top: tooltipPos.top,
            transform: "translate(-50%, -130%)",
          }}
        >
          {hovered.type === "city" && (
            <>
              <div className="font-semibold text-slate-100">{hovered.data.name}</div>
              <div className="text-slate-400">{hovered.data.province} · {hovered.data.urduName}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{
                  backgroundColor:
                    hovered.data.safetyScore >= 80 ? "#22c55e" :
                    hovered.data.safetyScore >= 70 ? "#eab308" :
                    hovered.data.safetyScore >= 60 ? "#f97316" : "#ef4444"
                }} />
                <span className="text-slate-300">Safety: {hovered.data.safetyScore}/100</span>
              </div>
            </>
          )}
          {hovered.type === "incident" && (
            <>
              <div className="font-semibold" style={{ color: incidentTypeMeta[hovered.data.type].color }}>
                {incidentTypeMeta[hovered.data.type].label}
              </div>
              <div className="text-slate-400 mt-0.5">{hovered.data.area}, {hovered.data.city}</div>
              <div className="text-slate-500 mt-1">{hovered.data.reportCount} reports</div>
            </>
          )}
          {hovered.type === "subarea" && (
            <>
              <div className="font-semibold text-slate-100">{hovered.data.name}</div>
              <div className="text-slate-400 mt-0.5">{hovered.data.urduName} · {hovered.data.city}</div>
              {hovered.data.nativeName && (
                <div className="text-slate-500">Called: {hovered.data.nativeName}</div>
              )}
              <div className="mt-1 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full" style={{
                  backgroundColor:
                    hovered.data.safetyScore >= 75 ? "#22c55e" :
                    hovered.data.safetyScore >= 55 ? "#eab308" :
                    hovered.data.safetyScore >= 40 ? "#f97316" : "#ef4444"
                }} />
                <span className="text-slate-300">Safety: {hovered.data.safetyScore}/100</span>
              </div>
              <div className="text-slate-500 mt-1 text-[10px] leading-tight">{hovered.data.description}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
