import { cities } from "./data";

export type SubArea = {
  id: string;
  name: string;
  urduName: string;
  city: string;
  parentArea?: string;
  safetyScore: number;
  description: string;
  nativeName?: string;
  timeRisk: "day" | "night" | "both";
  incidentType?: string;
  // relative position to the parent city's map coordinates (offset in %)
  offsetX: number;
  offsetY: number;
};

export const subAreas: SubArea[] = [
  // ===== KARACHI SUB-AREAS =====
  { id: "sa-khi-01", name: "Nursery", urduName: "نرسری", city: "Karachi", parentArea: "Shahrah-e-Faisal", safetyScore: 45, description: "Busy intersection area on Shahrah-e-Faisal. Phone snatching hotspot at traffic signals.", nativeName: "Nursary Mor", timeRisk: "both", incidentType: "phone_snatching", offsetX: 0.5, offsetY: -1.2 },
  { id: "sa-khi-02", name: "Buns Road", urduName: "بنز روڈ", city: "Karachi", parentArea: "Saddar", safetyScore: 38, description: "Narrow road in Saddar area. Pickpocketing and bag snatching reported. Avoid after dark.", timeRisk: "night", incidentType: "street_crime", offsetX: -1.5, offsetY: 0.5 },
  { id: "sa-khi-03", name: "Hyderi", urduName: "حیدری", city: "Karachi", parentArea: "Saddar", safetyScore: 42, description: "Popular market area in Saddar. Crowded. Keep valuables hidden; phone snatching at signals.", nativeName: "Hyderi Market", timeRisk: "both", incidentType: "phone_snatching", offsetX: -0.8, offsetY: -0.8 },
  { id: "sa-khi-04", name: "Manzoor Colony", urduName: "منظور کالونی", city: "Karachi", parentArea: "Korangi", safetyScore: 35, description: "Residential colony near Korangi. Street crime reported after dark. Use main roads.", timeRisk: "night", incidentType: "street_crime", offsetX: 1.2, offsetY: 1.5 },
  { id: "sa-khi-05", name: "Tariq Road", urduName: "طارق روڈ", city: "Karachi", parentArea: "Shahrah-e-Faisal", safetyScore: 55, description: "Popular shopping street. Daytime safe; evening phone snatching at signals.", nativeName: "Tariq Road Market", timeRisk: "both", incidentType: "phone_snatching", offsetX: 0.8, offsetY: 0.3 },
  { id: "sa-khi-06", name: "Gulshan-e-Iqbal", urduName: "گلشن اقبال", city: "Karachi", parentArea: "University Road", safetyScore: 65, description: "Large residential area. Generally safe; avoid isolated blocks after 11 PM.", timeRisk: "both", offsetX: 1.5, offsetY: -2 },
  { id: "sa-khi-07", name: "DHA Phase 4-6", urduName: "ڈی ایچ اے فیز 4-6", city: "Karachi", parentArea: "Clifton", safetyScore: 85, description: "Well-secured, patrolled, gated community. Safe for families day and night.", timeRisk: "both", offsetX: -2, offsetY: -1 },
  { id: "sa-khi-08", name: "Korangi No. 5", urduName: "کورنگی نمبر 5", city: "Karachi", parentArea: "Korangi", safetyScore: 40, description: "Industrial-residential mix. Caution after dark. Use Korangi Creek Road instead.", timeRisk: "night", incidentType: "street_crime", offsetX: 2.5, offsetY: 2 },
  { id: "sa-khi-09", name: "Liaquatabad", urduName: "لیاقت آباد", city: "Karachi", parentArea: "Gulberg Town", safetyScore: 42, description: "Densely populated. Street crime and phone snatching. Travel via main Liaquat Road.", nativeName: "Lalukhet", timeRisk: "night", incidentType: "street_crime", offsetX: 0, offsetY: 2.5 },
  { id: "sa-khi-10", name: "North Nazimabad", urduName: "نارتھ ناظم آباد", city: "Karachi", parentArea: "Gulberg Town", safetyScore: 60, description: "Planned residential area. Moderate safety. Block H and K are safer blocks.", timeRisk: "both", offsetX: -0.5, offsetY: 4 },
  { id: "sa-khi-11", name: "Federal B Area", urduName: "فیڈرل بی ایریا", city: "Karachi", parentArea: "Gulberg Town", safetyScore: 55, description: "Residential area. Moderate crime. Avoid block 15-18 at night.", timeRisk: "both", offsetX: 1, offsetY: 3.5 },
  { id: "sa-khi-12", name: "Malir Halt", urduName: "ملیر ہالٹ", city: "Karachi", parentArea: "Shahrah-e-Faisal", safetyScore: 45, description: "Approach to Malir. Highway robberies reported at night. Travel in daytime.", timeRisk: "night", incidentType: "street_crime", offsetX: 3, offsetY: 1 },
  { id: "sa-khi-13", name: "Kharadar", urduName: "کھارادر", city: "Karachi", parentArea: "Saddar", safetyScore: 35, description: "Old city area. Very crowded. Pickpocketing and petty crime. Keep valuables hidden.", nativeName: "Kharadar Bazaar", timeRisk: "day", incidentType: "street_crime", offsetX: -2.5, offsetY: 1 },
  { id: "sa-khi-14", name: "Memon Nagar", urduName: "میمن نگر", city: "Karachi", parentArea: "Korangi", safetyScore: 48, description: "Residential area near Korangi. Moderate safety. Use main roads at night.", timeRisk: "night", offsetX: 2, offsetY: 2.5 },
  { id: "sa-khi-15", name: "Zamzama", urduName: "زمزمہ", city: "Karachi", parentArea: "Clifton", safetyScore: 82, description: "Upscale commercial street in Clifton. Well-lit, safe for families and dining out.", timeRisk: "both", offsetX: -2.5, offsetY: -1.5 },
  { id: "sa-khi-16", name: "Burns Road", urduName: "برنس روڈ", city: "Karachi", parentArea: "Saddar", safetyScore: 44, description: "Famous food street. Very crowded evenings. Pickpocketing risk. Park in designated areas.", nativeName: "Burns Road Food Street", timeRisk: "both", incidentType: "street_crime", offsetX: -1.8, offsetY: -0.3 },
  { id: "sa-khi-17", name: "Empress Market", urduName: "ایمپریس مارکیٹ", city: "Karachi", parentArea: "Saddar", safetyScore: 40, description: "Historic market. Very crowded. Pickpocketing common. Avoid carrying visible valuables.", timeRisk: "day", incidentType: "street_crime", offsetX: -1.2, offsetY: 1.2 },
  { id: "sa-khi-18", name: "Gulistan-e-Johar", urduName: "گلستان جوہر", city: "Karachi", parentArea: "University Road", safetyScore: 50, description: "Large residential area. Block 2-7 safer; outer blocks need caution at night.", timeRisk: "night", incidentType: "street_crime", offsetX: 2.5, offsetY: -1.5 },
  { id: "sa-khi-19", name: "Bahadurabad", urduName: "بہادر آباد", city: "Karachi", parentArea: "Gulshan-e-Iqbal", safetyScore: 68, description: "Popular commercial and residential area. Well-lit main roads. Safe for families.", nativeName: "Bahadurabad Chowrangi", timeRisk: "both", offsetX: 1.8, offsetY: -1.5 },
  { id: "sa-khi-20", name: "Orangi Town", urduName: "اورنگی ٹاؤن", city: "Karachi", parentArea: "Baldia", safetyScore: 30, description: "One of largest informal settlements. High crime area. Avoid after dark entirely.", timeRisk: "night", incidentType: "street_crime", offsetX: -3, offsetY: 2 },

  // ===== LAHORE SUB-AREAS =====
  { id: "sa-lhr-01", name: "Liberty Market", urduName: "لبرٹی مارکیٹ", city: "Lahore", parentArea: "Gulberg", safetyScore: 68, description: "Popular shopping area. Moderate safety. Motorbike bag snatchers at night.", timeRisk: "night", incidentType: "street_crime", offsetX: -1, offsetY: 0.8 },
  { id: "sa-lhr-02", name: "Anarkali", urduName: "انارکلی", city: "Lahore", parentArea: "Old City", safetyScore: 45, description: "Historic bazaar. Very crowded. Pickpocketing. Keep wallets in front pockets.", nativeName: "Anarkali Bazaar", timeRisk: "day", incidentType: "street_crime", offsetX: -2, offsetY: 1.5 },
  { id: "sa-lhr-03", name: "Johar Town", urduName: "جوہر ٹاؤن", city: "Lahore", parentArea: "Ferozepur Road", safetyScore: 70, description: "Large residential area. Generally safe. Block L and M are well-lit and patrolled.", timeRisk: "both", offsetX: 1.5, offsetY: 2 },
  { id: "sa-lhr-04", name: "Model Town", urduName: "ماڈل ٹاؤن", city: "Lahore", parentArea: "Ferozepur Road", safetyScore: 76, description: "Affluent planned residential area. Gated community with security. Safe.", timeRisk: "both", offsetX: 0.5, offsetY: 2.5 },
  { id: "sa-lhr-05", name: "Township", urduName: "ٹاؤن شپ", city: "Lahore", parentArea: "Ferozepur Road", safetyScore: 55, description: "Residential area. Moderate crime. Avoid blocks C and D after 10 PM.", timeRisk: "night", incidentType: "street_crime", offsetX: 2, offsetY: 2.5 },
  { id: "sa-lhr-06", name: "Walled City", urduName: "اندرون شہر", city: "Lahore", parentArea: "Old City", safetyScore: 40, description: "Delhi Gate, Lohari Gate area. Extremely crowded. Pickpocketing. Avoid after dark.", nativeName: "Androon Lahore", timeRisk: "day", incidentType: "street_crime", offsetX: -2.5, offsetY: 2 },
  { id: "sa-lhr-07", name: "Walton Road", urduName: "والٹن روڈ", city: "Lahore", parentArea: "Cantt", safetyScore: 72, description: "Cantt area road. Well-secured. Safe during day and evening.", timeRisk: "both", offsetX: -2.5, offsetY: -0.5 },
  { id: "sa-lhr-08", name: "Ichhra", urduName: "اشرا", city: "Lahore", parentArea: "Ferozepur Road", safetyScore: 52, description: "Famous cloth market. Very crowded. Pickpocketing risk. Daytime recommended.", nativeName: "Ichhra Bazaar", timeRisk: "day", incidentType: "street_crime", offsetX: -1.5, offsetY: 1.5 },
  { id: "sa-lhr-09", name: "Garden Town", urduName: "گارڈن ٹاؤن", city: "Lahore", parentArea: "Ferozepur Road", safetyScore: 72, description: "Residential area. Safe and well-lit. Good for families.", timeRisk: "both", offsetX: 0, offsetY: 1.5 },
  { id: "sa-lhr-10", name: "Samanabad", urduName: "سمان آباد", city: "Lahore", parentArea: "Ferozepur Road", safetyScore: 60, description: "Old residential area. Moderate safety. Main boulevard is safer than side streets.", timeRisk: "both", offsetX: -1, offsetY: 2.5 },
  { id: "sa-lhr-11", name: "Y-Block DHA", urduName: "وائی بلاک ڈی ایچ اے", city: "Lahore", parentArea: "DHA", safetyScore: 88, description: "Commercial hub of DHA Lahore. Safest shopping and dining area. Active till late.", timeRisk: "both", offsetX: 2.5, offsetY: 1 },
  { id: "sa-lhr-12", name: "Baghbanpura", urduName: "باغبان پورہ", city: "Lahore", parentArea: "Shahdara", safetyScore: 45, description: "Old residential area near Shalimar Gardens. Caution at night.", timeRisk: "night", incidentType: "street_crime", offsetX: -3, offsetY: -1 },

  // ===== ISLAMABAD SUB-AREAS =====
  { id: "sa-isb-01", name: "F-6 Markaz", urduName: "ایف-6 مرکز", city: "Islamabad", parentArea: "F-6", safetyScore: 90, description: "Super Market. Safest commercial area. Family-friendly, well-patrolled.", timeRisk: "both", offsetX: -1.5, offsetY: -0.5 },
  { id: "sa-isb-02", name: "G-9 Markaz", urduName: "جی-9 مرکز", city: "Islamabad", parentArea: "G-9", safetyScore: 80, description: "Karachi Company area. Busy but safe. Well-lit and moderate patrolling.", nativeName: "Karachi Company", timeRisk: "both", offsetX: -1, offsetY: 1.5 },
  { id: "sa-isb-03", name: "I-8 Markaz", urduName: "آئی-8 مرکز", city: "Islamabad", parentArea: "I-8", safetyScore: 85, description: "Residential and commercial. Safe, well-lit. Good for families.", timeRisk: "both", offsetX: 0.5, offsetY: 2 },
  { id: "sa-isb-04", name: "G-11 Markaz", urduName: "جی-11 مرکز", city: "Islamabad", parentArea: "G-11", safetyScore: 78, description: "Famous food street area. Safe evenings. Well-lit main roads.", timeRisk: "both", offsetX: -2, offsetY: 1.5 },
  { id: "sa-isb-05", name: "Bahria Town Phase 7", urduName: "بحریہ ٹاؤن فیز 7", city: "Islamabad", parentArea: "Bahria Town", safetyScore: 88, description: "Gated community. Very safe. Security patrols 24/7.", timeRisk: "both", offsetX: 2.5, offsetY: 2.5 },
  { id: "sa-isb-06", name: "Sector H-12", urduName: "سیکٹر ایچ-12", city: "Islamabad", parentArea: "Kashmir Highway", safetyScore: 70, description: "NUST university area. Safe during day. Less patrolled at night.", timeRisk: "both", offsetX: -2.5, offsetY: 0.5 },
  { id: "sa-isb-07", name: "D-Chowk", urduName: "ڈی چوک", city: "Islamabad", parentArea: "Blue Area", safetyScore: 75, description: "Political gathering point. Generally safe but avoid during protests/rallies.", timeRisk: "both", offsetX: 0, offsetY: 0 },

  // ===== RAWALPINDI SUB-AREAS =====
  { id: "sa-rwp-01", name: "Raja Bazaar", urduName: "راجا بازار", city: "Rawalpindi", parentArea: "Saddar", safetyScore: 45, description: "Crowded old bazaar. Pickpocketing. Keep valuables hidden. Daytime only.", nativeName: "Raja Bazaar Saddar", timeRisk: "day", incidentType: "street_crime", offsetX: -1, offsetY: 0.5 },
  { id: "sa-rwp-02", name: "Commercial Market", urduName: "کمرشل مارکیٹ", city: "Rawalpindi", parentArea: "Satellite Town", safetyScore: 62, description: "Busy commercial area. Moderate safety. Use parking lots, don't leave valuables visible.", timeRisk: "both", offsetX: 1, offsetY: -1 },
  { id: "sa-rwp-03", name: "Peshawar Road", urduName: "پشاور روڈ", city: "Rawalpindi", parentArea: "Cantt", safetyScore: 75, description: "Cantt road, well-patrolled. Safe for travel. Connects to Islamabad via Faizabad.", timeRisk: "both", offsetX: -2, offsetY: -1 },
  { id: "sa-rwp-04", name: "Satellite Town", urduName: "سیٹلائٹ ٹاؤن", city: "Rawalpindi", parentArea: "Murree Road", safetyScore: 65, description: "Residential area. Moderate safety. Main roads well-lit.", timeRisk: "both", offsetX: 1, offsetY: -0.5 },
  { id: "sa-rwp-05", name: "Chandni Chowk", urduName: "چاندنی چوک", city: "Rawalpindi", parentArea: "Murree Road", safetyScore: 55, description: "Busy intersection on Murree Road. Congested. Keep windows up at signals.", timeRisk: "both", incidentType: "phone_snatching", offsetX: 1.5, offsetY: 1.5 },
  { id: "sa-rwp-06", name: "Marrir Chowk", urduName: "مریڑ چوک", city: "Rawalpindi", parentArea: "Murree Road", safetyScore: 48, description: "Busy intersection. High congestion. Phone snatching reported at signals.", timeRisk: "both", incidentType: "phone_snatching", offsetX: 0.5, offsetY: 0.8 },

  // ===== PESHAWAR SUB-AREAS =====
  { id: "sa-psh-01", name: "Saddar Bazaar", urduName: "صدر بازار", city: "Peshawar", parentArea: "Cantt", safetyScore: 65, description: "Cantt bazaar. Better patrolled than city bazaars. Moderate safety.", timeRisk: "both", offsetX: -1.5, offsetY: 0.5 },
  { id: "sa-psh-02", name: "Qissa Khwani", urduName: "قصہ خوانی", city: "Peshawar", parentArea: "Old City", safetyScore: 42, description: "Historic bazaar. Very crowded. Pickpocketing. Keep valuables hidden.", nativeName: "Qissa Khwani Bazaar", timeRisk: "day", incidentType: "street_crime", offsetX: 0.5, offsetY: 0.8 },
  { id: "sa-psh-03", name: "University Town", urduName: "یونیورسٹی ٹاؤن", city: "Peshawar", parentArea: "Hayatabad", safetyScore: 78, description: "Academic and residential area. Safe, well-lit. Good for families.", timeRisk: "both", offsetX: 1.5, offsetY: 1.5 },
  { id: "sa-psh-04", name: "Gulbahar", urduName: "گل بہار", city: "Peshawar", parentArea: "GT Road", safetyScore: 50, description: "Residential area on GT Road. Moderate crime. Use main GT Road at night.", timeRisk: "night", incidentType: "street_crime", offsetX: -1.5, offsetY: -1 },

  // ===== MULTAN SUB-AREAS =====
  { id: "sa-mtn-01", name: "Chowk Ghanta Ghar", urduName: "چوک گھنٹہ گھر", city: "Multan", parentArea: "Old City", safetyScore: 50, description: "Clock tower square. Crowded. Pickpocketing. Daytime recommended.", nativeName: "Ghanta Ghar", timeRisk: "day", incidentType: "street_crime", offsetX: -1, offsetY: 0.5 },
  { id: "sa-mtn-02", name: "Gulgasht Colony", urduName: "گلگشت کالونی", city: "Multan", parentArea: "Bosan Road", safetyScore: 72, description: "Residential area near Bosan Road. Safe, well-lit. Good for families.", timeRisk: "both", offsetX: 1.5, offsetY: -0.5 },
  { id: "sa-mtn-03", name: "Baba Safra Reun", urduName: "بابا صفری رن", city: "Multan", parentArea: "Old City", safetyScore: 45, description: "Old city area. Narrow streets. Caution after dark.", timeRisk: "night", incidentType: "street_crime", offsetX: -1.5, offsetY: 1 },

  // ===== HYDERABAD SUB-AREAS =====
  { id: "sa-hyd-01", name: "Latifabad Unit 7-8", urduName: "لطیف آباد یونٹ 7-8", city: "Hyderabad", parentArea: "Latifabad", safetyScore: 55, description: "Residential units. Moderate crime. Main roads safer at night.", timeRisk: "night", incidentType: "street_crime", offsetX: -1, offsetY: 0.5 },
  { id: "sa-hyd-02", name: "Qasimabad", urduName: "قاسم آباد", city: "Hyderabad", parentArea: "Thandi Sadak", safetyScore: 70, description: "Newer residential area. Better lit, safer than old city. Popular with families.", timeRisk: "both", offsetX: 1.5, offsetY: -0.5 },
  { id: "sa-hyd-03", name: "Hirabad", urduName: "ہیر آباد", city: "Hyderabad", parentArea: "Auto Bazaar", safetyScore: 45, description: "Old commercial area. Crowded. Pickpocketing. Daytime recommended.", timeRisk: "day", incidentType: "street_crime", offsetX: 0.5, offsetY: 1 },

  // ===== QUETTA SUB-AREAS =====
  { id: "sa-quet-01", name: "Passancha Road", urduName: "پسانچہ روڈ", city: "Quetta", parentArea: "Spini Road", safetyScore: 30, description: "Outlying area. High risk. Avoid after dark. Limited police presence.", timeRisk: "night", incidentType: "street_crime", offsetX: -1.5, offsetY: 1.5 },
  { id: "sa-quet-02", name: "Sariab Road", urduName: "سریاب روڈ", city: "Quetta", parentArea: "Zarghoon Road", safetyScore: 35, description: "Southern approach. Avoid after dark. Check news before traveling this route.", timeRisk: "night", incidentType: "street_crime", offsetX: 0.5, offsetY: 2 },
  { id: "sa-quet-03", name: "Mezan Chowk", urduName: "میزان چوک", city: "Quetta", parentArea: "Jinnah Road", safetyScore: 65, description: "Central roundabout. Busy. Moderate safety during daytime.", timeRisk: "both", offsetX: 0, offsetY: -0.5 },

  // ===== GILGIT SUB-AREAS =====
  { id: "sa-gb-01", name: "Konodas", urduName: "کونودس", city: "Gilgit", parentArea: "Gilgit City Road", safetyScore: 78, description: "Village on KKH. Very low crime. Road condition is the main concern.", timeRisk: "day", offsetX: -1, offsetY: 1 },
  { id: "sa-gb-02", name: "Karimabad Bazaar", urduName: "کریم آباد بازار", city: "Gilgit", parentArea: "Hunza Valley Road", safetyScore: 85, description: "Hunza's main bazaar. Extremely safe. Tourist-friendly. Scenic and welcoming.", timeRisk: "both", offsetX: 2.5, offsetY: -1.5 },
  { id: "sa-gb-03", name: "Nagar Bazaar", urduName: "نگر بازار", city: "Gilgit", parentArea: "Nagar Road", safetyScore: 82, description: "Nagar Valley bazaar. Very safe. Low crime. Road can be rough.", timeRisk: "day", offsetX: -1.5, offsetY: -0.5 },

  // ===== MUZAFFARABAD SUB-AREAS =====
  { id: "sa-ajk-01", name: "Upper Adda", urduName: "اپر اڈہ", city: "Muzaffarabad", parentArea: "Muzaffarabad City Road", safetyScore: 80, description: "Central bus/taxi stand. Safe. Low crime. Good starting point for Neelum Valley.", timeRisk: "both", offsetX: 0.5, offsetY: -0.5 },
  { id: "sa-ajk-02", name: "Athmuqam", urduName: "آٹھمقام", city: "Muzaffarabad", parentArea: "Neelum Valley Road", safetyScore: 85, description: "Neelum Valley town. Extremely safe. Landslide risk on approach road in monsoon.", timeRisk: "day", offsetX: 2.5, offsetY: -1 },
  { id: "sa-ajk-03", name: "Domel", urduName: "دومل", city: "Muzaffarabad", parentArea: "Kohala Road", safetyScore: 75, description: "Junction of Neelum and Jhelum rivers. Safe. Scenic. Road caution in rains.", timeRisk: "day", offsetX: 1.5, offsetY: 0.5 },

  // ===== FAISALABAD SUB-AREAS =====
  { id: "sa-fsd-01", name: "D Ground", urduName: "ڈی گراؤنڈ", city: "Faisalabad", parentArea: "People's Colony", safetyScore: 72, description: "Popular commercial area. Safe evenings. Well-lit main roads.", timeRisk: "both", offsetX: 1, offsetY: -0.5 },
  { id: "sa-fsd-02", name: "Ghulam Muhammad Abad", urduName: "غلام محمد آباد", city: "Faisalabad", parentArea: "Madina Town", safetyScore: 55, description: "Dense residential. Moderate crime. Use main roads at night.", timeRisk: "night", incidentType: "street_crime", offsetX: -0.5, offsetY: 1.5 },
  { id: "sa-fsd-03", name: "Jaranwala Road", urduName: "جڑانوالہ روڈ", city: "Faisalabad", parentArea: "Industrial Area", safetyScore: 48, description: "Industrial area approach. Caution after dark. Truck traffic.", timeRisk: "night", incidentType: "street_crime", offsetX: 2, offsetY: 1 },

  // ===== SUKKUR SUB-AREAS =====
  { id: "sa-skk-01", name: "Minara Road", urduName: "منارہ روڈ", city: "Sukkur", parentArea: "City Center", safetyScore: 68, description: "Main city road. Moderate safety. Busier during day.", timeRisk: "both", offsetX: 0.5, offsetY: -0.5 },
  { id: "sa-skk-02", name: "Bunder Road", urduName: "بندر روڈ", city: "Sukkur", parentArea: "Riverside", safetyScore: 60, description: "Riverside road. Avoid isolated sections after dark.", timeRisk: "night", offsetX: -0.5, offsetY: 0.5 },
];

export function getSubAreasByCity(cityName: string): SubArea[] {
  return subAreas.filter((sa) => sa.city === cityName);
}

export function searchSubAreas(query: string): SubArea[] {
  const q = query.toLowerCase().trim();
  if (!q) return subAreas;
  return subAreas.filter(
    (sa) =>
      sa.name.toLowerCase().includes(q) ||
      sa.urduName.includes(q) ||
      sa.city.toLowerCase().includes(q) ||
      sa.nativeName?.toLowerCase().includes(q) ||
      (sa.parentArea?.toLowerCase().includes(q) ?? false)
  );
}

export function getSubAreaPosition(subArea: SubArea): { x: number; y: number } {
  const city = cities.find((c) => c.name === subArea.city);
  if (!city) return { x: 50, y: 50 };
  return {
    x: city.x + subArea.offsetX,
    y: city.y + subArea.offsetY,
  };
}
