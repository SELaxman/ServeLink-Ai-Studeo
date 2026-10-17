import { Professional, Booking } from '../types';

export const SERVELINK_LOGO = "https://lh3.googleusercontent.com/aida/AEtjO1UN6O6bNFYhyEcZ3_iVg8yzbr7zTO_NmoiL-gxcqDasgoGzFjoMS5hk0zt8QCjmskd2e7YuWzCfgjzAEzJpVj5B0qCxbte5Rw-iRELTq40gWOrs-6TDLUnxH1wm6FrsudfCOkpnUJBUEXXV160W3cmHqtY6wmIQmAirbpu0sMTTp-VabijSSn2EX1riwm2Gog75B1BfwfNqc8orv9mN07nKD9mM08KW_EdNytcd3Rw25sbqvvbpB2qE2w";
export const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCXKCnS-0H9-TY2P9tqS-5dghSV0q7l5gVVpHsaFrg58AxKyVlJhIzHjFgbRAzG9-4fwXLkNgjhhqvbPOi-xu9HB2OS9fOMkF2xc17UiGozYKM0Ha1SL2zv4CKX8pluCwJQbJCiWylmMa4ZS4AiW-luDWL2Tsk2J4WLh_6zzOmJZi9FEwPQ_BmeoW2nb_ZTrGBH6wOKV1Rk_wB6RkgGIFlIXGOgF7nN6SORDvPDpKzorUWWy7rWgj1l";
export const DEFAULT_FAULT_PHOTO = "https://lh3.googleusercontent.com/aida-public/AB6AXuA6IpUcdQ6wwqKjtOiEAL0sySNtuXPUPy8hTE5SnHrhUr14fj-egedqTrcpXvYBB1eF5R20eUOXqVw4AWzF33oXBP9Wja8Mi98-gGQqu48-HuJEmothGrZpo90V2K3oJhOs0F-Xl_fdy7iiPRaZUm5OVTi-3PKOKkEc5xC3bnW8VctAHHuNq695fOehhSPuV9m46jnXP0dgtSf6BnmurYOfxyLPQ9gP3vJsoU7KF1vFz8QYcRL-0ePB";
export const PRO_PARTNER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCAJJfPoMqPUwJjfo23-jeAhcxemjLZD4cj6lTh0iBJnKugEWpsDRdjD9s4TytC4THkIXkeI5aiR-kAhjFnjooZzgjUcMu09cEKxaSdnr_H_yWuDV79hvkMKrDpIifgW_j5dP5pVyJ46vV2U1vwGRYsuogv-Aa9wifhRtHT6_uPWIVIMUxlzo7hTj8XvD8Pch-I5hsBWFW0cRlVIVnXp4iAIGYoYjfJ0QJZqTW2SzHjb2wfT553nD73";
export const MODAL_PRO_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuD0ia10xV366ncuIId-UEE2-1LCJmzQFmEazSrsmjuRKNyynIeCqGbXCUcDlkGtmwsaiuwsReisQ1qgl9ft6yb67qnQi1incB2rLsSthHMj6vLffHo46ZCrUc1WecCBbI90-YU87JCdHzE5yfJZ00ZaHk_dnQ6VypekIg3r978p561w-h-PgSZ7QYtD_KUZO0Jdl4T46S3aD0ZQ6VC6Vc5u_wK3Uyuv6yjSaV2QLzclumfZVkOJfCTy";

export const BHOPAL_ZONES = [
  { id: "all", label: "Near Bhopal (All)", description: "Bhopal Metro (All Zones)" },
  { id: "mp-nagar", label: "MP Nagar, Bhopal", description: "MP Nagar Zone I & II" },
  { id: "arera", label: "Arera Colony, Bhopal", description: "Arera Colony (E1-E7)" },
  { id: "kolar", label: "Kolar Road, Bhopal", description: "Kolar Road & Danish Kunj" },
  { id: "indrapuri", label: "Indrapuri, Bhopal", description: "Indrapuri & BHEL Township" },
  { id: "hoshangabad", label: "Hoshangabad Rd, Bhopal", description: "Hoshangabad Rd Corridor" },
];

export const CATEGORIES = [
  { id: "all", label: "All Services", count: "12 Verified", icon: "grid_view", color: "bg-primary-container", textColor: "text-on-primary" },
  { id: "electrician", label: "Electricians", subtitle: "Wiring & MCB", icon: "bolt", circleBg: "bg-primary-fixed", iconColor: "text-primary" },
  { id: "plumber", label: "Plumbers", subtitle: "Pipe & Leaks", icon: "plumbing", circleBg: "bg-secondary-fixed", iconColor: "text-primary-container" },
  { id: "painter", label: "Painters", subtitle: "Interior / Exterior", icon: "format_paint", circleBg: "bg-surface-container", iconColor: "text-secondary" },
  { id: "carpenter", label: "Carpenters", subtitle: "Furniture & Locks", icon: "carpenter", circleBg: "bg-tertiary-fixed", iconColor: "text-tertiary" },
  { id: "mechanic", label: "Mechanics", subtitle: "EV / Bike / Car", icon: "two_wheeler", circleBg: "bg-error-container", iconColor: "text-error" },
  { id: "ac", label: "AC Repair", subtitle: "Split & Inverter", icon: "mode_fan", circleBg: "bg-surface-container-highest", iconColor: "text-primary-container" },
  { id: "tv", label: "TV Repair", subtitle: "LED & 4K Panels", icon: "tv", circleBg: "bg-secondary-fixed-dim", iconColor: "text-on-secondary-fixed" },
  { id: "fridge", label: "Refrigerator", subtitle: "Frost-free & Gas", icon: "kitchen", circleBg: "bg-surface-container-high", iconColor: "text-primary" },
  { id: "washing", label: "Washing Machine", subtitle: "Front & Top Load", icon: "local_laundry_service", circleBg: "bg-primary-fixed-dim", iconColor: "text-primary" },
];

export const TRENDING_TAGS = [
  { label: "AC Cooling", icon: "⚡" },
  { label: "EV Bike Repair", icon: "🔋" },
  { label: "Water Leakage", icon: "🚰" },
  { label: "Switchboard Spark", icon: "🔌" },
  { label: "LG Washing Machine", icon: "🌀" },
  { label: "Arera Colony", icon: "📍" },
];

export const ALL_PROFESSIONALS: Professional[] = [
  {
    id: "pro-1",
    name: "Amit Patel",
    category: "ac",
    categoryLabel: "AC Repair",
    rating: 4.88,
    reviewsCount: 310,
    location: "Kolar Road, Bhopal",
    distance: 3.1,
    jobsCompleted: 850,
    experience: 12,
    price: 399,
    availableToday: true,
    verified: true,
    specializations: ["Inverter AC Expert", "Gas Leak Detection", "Jet Pump Deep Cleaning"],
    brands: ["Voltas", "Daikin", "LG", "Samsung", "Blue Star", "Hitachi"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826033443",
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Smiling air conditioning technician Amit Patel wearing blue uniform holding manifold pressure gauge.",
    portfolio: [
      {
        title: "Daikin 1.5 Ton Split Inverter PCB Soldering & R32 Recharge",
        category: "AC Repair",
        date: "2 days ago",
        review: "Diagnosed cooling issue in 10 minutes. Super cold air now! Very polite and professional.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Technician connecting blue and red pressure gauges to outdoor air conditioner unit."
      },
      {
        title: "Voltas Deep Foam Jet Wash with Anti-fungal Treatment",
        category: "AC Repair",
        date: "Last week",
        review: "Jet clean flushed out all the dust. Airflow is twice as strong now. Highly recommended.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Indoor air conditioning filter and fan blower cleaned thoroughly."
      }
    ]
  },
  {
    id: "pro-2",
    name: "Mukesh Chouhan",
    category: "ac",
    categoryLabel: "AC Repair",
    rating: 4.93,
    reviewsCount: 250,
    location: "MP Nagar, Bhopal",
    distance: 2.0,
    jobsCompleted: 670,
    experience: 13,
    price: 449,
    availableToday: true,
    verified: true,
    specializations: ["Commercial HVAC", "Voltas Specialist", "Copper Piping"],
    brands: ["Voltas", "Blue Star", "Carrier", "LG"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826077333",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "HVAC specialist Mukesh Chouhan in hard hat inspecting AC condenser unit.",
    portfolio: [
      {
        title: "Voltas 2 Ton Cassette AC Comprehensive Jet Wash & Motor Fix",
        category: "AC Repair",
        date: "Yesterday",
        review: "Office AC works like brand new now. Arrived right on schedule in MP Nagar Zone 1.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Ceiling cassette air conditioning unit disassembled with clean fin coils sparkling."
      }
    ]
  },
  {
    id: "pro-3",
    name: "Vikram Verma",
    category: "mechanic",
    categoryLabel: "Mechanic",
    rating: 4.95,
    reviewsCount: 218,
    location: "MP Nagar, Bhopal",
    distance: 2.4,
    jobsCompleted: 620,
    experience: 11,
    price: 349,
    availableToday: true,
    verified: true,
    specializations: ["EV Specialist", "BMS Calibration", "Brake Overhaul"],
    brands: ["Ather", "Ola", "TVS iQube", "Hero Electric", "Honda"],
    vehicles: ["Scooter/Bike", "Car"],
    fuelTech: ["EV", "Petrol"],
    phone: "+919826022332",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Portrait of Vikram Verma holding an automotive diagnostic scanning tool in high tech mechanic workshop.",
    portfolio: [
      {
        title: "Ather 450X High-Voltage Controller Diagnostic & Cell Check",
        category: "Mechanic (EV)",
        date: "Yesterday",
        review: "Understands lithium batteries and BMS firmware better than the official service center. Fixed error code in 30 mins.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Electric scooter chassis opened showing battery compartment and diagnostic tablet readout."
      },
      {
        title: "Periodic Tuneup & Disc Brake Renewal on Activa 6G",
        category: "Mechanic (Petrol)",
        date: "May 10",
        review: "Prompt door-step service near MP Nagar Zone 2. Replaced brake pads and changed engine oil neatly.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Mechanic servicing motorbike disc brake caliper with specialized torque wrench."
      }
    ]
  },
  {
    id: "pro-4",
    name: "Mohammed Arif",
    category: "plumber",
    categoryLabel: "Plumber",
    rating: 4.85,
    reviewsCount: 280,
    location: "Hoshangabad Rd, Bhopal",
    distance: 5.0,
    jobsCompleted: 710,
    experience: 14,
    price: 249,
    availableToday: false,
    verified: true,
    specializations: ["Concealed Pipe Detection", "Pressure Booster Pumps", "Bathroom Fitting"],
    brands: ["Jaquar", "Kohler", "Cera", "Hindware"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826055665",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Master plumber Mohammed Arif with pipe wrench standing in clean tiled bathroom interior.",
    portfolio: [
      {
        title: "Acoustic Leak Detection & Non-destructive Tile Repair",
        category: "Plumber",
        date: "May 12",
        review: "Saved our bathroom wall from getting demolished. Located the exact micro-crack behind tiles with zero guesswork.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Precision pipe repair fitting inside exposed bathroom wall with zero unnecessary tile breakage."
      }
    ]
  },
  {
    id: "pro-5",
    name: "Rajesh Sharma",
    category: "electrician",
    categoryLabel: "Electrician",
    rating: 4.9,
    reviewsCount: 142,
    location: "Arera Colony, Bhopal",
    distance: 1.8,
    jobsCompleted: 480,
    experience: 9,
    price: 299,
    availableToday: true,
    verified: true,
    specializations: ["Inverter Specialist", "MCB Tripping", "Concealed Wiring"],
    brands: ["Havells", "Schneider", "Anchor", "Polycab"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826011221",
    avatar: PRO_PARTNER_AVATAR,
    avatarAlt: "Portrait of Indian master electrician Rajesh Sharma with safety gear and friendly welcoming demeanor in Bhopal.",
    portfolio: [
      {
        title: "Complete 3BHK Modular Wiring & Load Balancing",
        category: "Electrician",
        date: "Yesterday",
        review: "Excellent clean work without damaging drywall. MCB trips solved completely after thorough phase balancing.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Clean newly installed white home circuit breaker panel with labeled switches and neat wire routing."
      },
      {
        title: "Heavy Appliance Stabilizer Bypass & Surge Protection",
        category: "Electrician",
        date: "3 days ago",
        review: "Quick and dependable. Arrived in Arera Colony in 25 minutes. Very respectful technician.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Technician connecting surge protection unit with clean copper grounding lines."
      }
    ]
  },
  {
    id: "pro-6",
    name: "Gurpreet Singh",
    category: "carpenter",
    categoryLabel: "Carpenter",
    rating: 4.91,
    reviewsCount: 198,
    location: "MP Nagar, Bhopal",
    distance: 2.8,
    jobsCompleted: 440,
    experience: 10,
    price: 349,
    availableToday: true,
    verified: true,
    specializations: ["Modular Kitchen Fitting", "Hydraulic Bed Hinges", "Digital Smart Locks"],
    brands: ["Hettich", "Ebco", "Hafele", "Godrej"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826077887",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Skilled carpenter Gurpreet Singh in safety glasses examining wood joint in modern workshop.",
    portfolio: [
      {
        title: "Hettich Soft-Close Drawer Rails and Shutter Alignment",
        category: "Carpenter",
        date: "Yesterday",
        review: "Flawless carpentry work. All cabinets glide like butter. Cleaned up sawdust before leaving.",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Modern kitchen modular drawer interior with sleek soft-closing metal runners."
      }
    ]
  },
  {
    id: "pro-7",
    name: "Dinesh Malviya",
    category: "tv",
    categoryLabel: "TV Repair",
    rating: 4.82,
    reviewsCount: 175,
    location: "Indrapuri, Bhopal",
    distance: 3.9,
    jobsCompleted: 510,
    experience: 11,
    price: 399,
    availableToday: true,
    verified: true,
    specializations: ["4K LED Backlight Fix", "Motherboard Repair", "Sound IC Replacement"],
    brands: ["Samsung", "LG", "Sony", "Xiaomi", "TCL"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826088998",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Electronics technician Dinesh Malviya soldering ribbon cable on an illuminated LED display bench.",
    portfolio: [
      {
        title: "Sony Bravia 55-inch LED Backlight Array Strip Renewal",
        category: "TV Repair",
        date: "3 days ago",
        review: "Brought dark screen back to life with vibrant original brightness. Half the price of Sony service quote.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Smart television chassis opened showing bright uniform LED backlight strips glowing."
      }
    ]
  },
  {
    id: "pro-8",
    name: "Priya Sundaram",
    category: "washing",
    categoryLabel: "Washing Machine Repair",
    rating: 4.92,
    reviewsCount: 164,
    location: "Indrapuri, Bhopal",
    distance: 4.2,
    jobsCompleted: 390,
    experience: 7,
    price: 349,
    availableToday: true,
    verified: true,
    specializations: ["Bosch Certified", "Drum Bearing Fix", "Drain Motor Repair"],
    brands: ["LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Haier"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826044554",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Female appliance repair engineer Priya Sundaram smiling confidently holding digital multimeter.",
    portfolio: [
      {
        title: "IFB Front Load Suspension Strut & Spider Arm Replacement",
        category: "Washing Machine",
        date: "Yesterday",
        review: "The heavy drum vibration completely stopped. Excellent craftsmanship and transparent pricing.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Interior view of opened washing machine drum with shiny stainless steel spider assembly."
      }
    ]
  },
  {
    id: "pro-9",
    name: "Deepak Sahu",
    category: "fridge",
    categoryLabel: "Refrigerator Repair",
    rating: 4.87,
    reviewsCount: 189,
    location: "Kolar Road, Bhopal",
    distance: 3.5,
    jobsCompleted: 430,
    experience: 9,
    price: 329,
    availableToday: false,
    verified: true,
    specializations: ["Inverter Compressor Specialist", "Defrost Thermostat", "R600a Gas"],
    brands: ["LG", "Samsung", "Whirlpool", "Haier", "Godrej"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826099009",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Technician Deepak Sahu testing refrigerator compressor with clamp meter.",
    portfolio: [
      {
        title: "Whirlpool Double Door No-Frost Sensor & Relay Replacement",
        category: "Refrigerator",
        date: "1 week ago",
        review: "Freezer works perfectly now without icing over. No extra hidden charges.",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Rear view of refrigerator showing clean compressor compartment and new copper filter dryer."
      }
    ]
  },
  {
    id: "pro-10",
    name: "Karan Bhati",
    category: "mechanic",
    categoryLabel: "Mechanic",
    rating: 4.78,
    reviewsCount: 130,
    location: "Arera Colony, Bhopal",
    distance: 2.2,
    jobsCompleted: 310,
    experience: 6,
    price: 249,
    availableToday: true,
    verified: true,
    specializations: ["Car Emergency Jumpstart", "Brake Pad Replacement", "ECU Scan"],
    brands: ["Maruti Suzuki", "Hyundai", "Tata", "Mahindra"],
    vehicles: ["Car"],
    fuelTech: ["Petrol", "Diesel", "CNG"],
    phone: "+919826011333",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Auto mechanic Karan Bhati checking car engine bay with diagnostic harness.",
    portfolio: [
      {
        title: "Hyundai i20 Alternator Replacement & On-site Battery Boost",
        category: "Mechanic (Car)",
        date: "2 days ago",
        review: "Came to Arera Colony in 20 minutes when my car broke down at night. Lifesaver!",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Car open hood in driveway with technician adjusting serpentine alternator belt."
      }
    ]
  },
  {
    id: "pro-11",
    name: "Sunita Devi",
    category: "painter",
    categoryLabel: "Painter",
    rating: 4.79,
    reviewsCount: 115,
    location: "Arera Colony, Bhopal",
    distance: 2.1,
    jobsCompleted: 240,
    experience: 8,
    price: 499,
    availableToday: true,
    verified: true,
    specializations: ["Waterproofing Expert", "Texture Wall Art", "Dustless Sanding"],
    brands: ["Asian Paints", "Berger", "Dulux", "Dr. Fixit"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826066776",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Sunita Devi, professional painting contractor wearing protective overalls holding paint roller.",
    portfolio: [
      {
        title: "Waterproofing & Royale Luxury Emulsion in Living Room",
        category: "Painter",
        date: "4 days ago",
        review: "Zero smell, very polite crew, finished on time. Floor covered and left spotless.",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Immaculate living room wall painted in rich warm ivory finish with crisp clean borders."
      }
    ]
  },
  {
    id: "pro-12",
    name: "Rameshwar Sen",
    category: "electrician",
    categoryLabel: "Electrician",
    rating: 4.75,
    reviewsCount: 92,
    location: "Hoshangabad Rd, Bhopal",
    distance: 6.2,
    jobsCompleted: 215,
    experience: 5,
    price: 199,
    availableToday: true,
    verified: true,
    specializations: ["Geyser Repair", "Ceiling Fan Installation", "Socket Replacement"],
    brands: ["Bajaj", "Crompton", "Havells"],
    vehicles: [],
    fuelTech: [],
    phone: "+919826044777",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=256",
    avatarAlt: "Young certified electrician Rameshwar Sen testing wall socket voltage with pen tester.",
    portfolio: [
      {
        title: "Instant Water Geyser Heating Element Renewal",
        category: "Electrician",
        date: "May 11",
        review: "Fast and very affordable installation. Checked all earthing points carefully.",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600",
        imgAlt: "Electric water heater mounted on bathroom wall with pristine chrome plumbing couplings."
      }
    ]
  }
];

export const INITIAL_BOOKINGS: Booking[] = [
  {
    id: "SL-8841",
    proId: "pro-3",
    proName: "Vikram Verma",
    proCategory: "Mechanic (EV Specialist)",
    proPhone: "+919826022332",
    proAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256",
    address: "Flat 402, Coral Heights, Arera Colony, Bhopal",
    timeSlot: "Today, 02:30 PM",
    notes: "Electric Scooter Battery Diagnostics & BMS sensor test after rain trip.",
    price: 349,
    status: "Confirmed",
    createdAt: "Today, 10:15 AM"
  }
];
