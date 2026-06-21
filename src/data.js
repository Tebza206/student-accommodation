import exterior from './assets/exterior.avif';
import sharing from './assets/sharing.avif';
import sharing2 from './assets/sharing2.avif';
import singleRoom from './assets/single-room.avif';
import bathroom from './assets/bathroom.avif';
import bathroom2 from './assets/bathroom2.avif';
import facilities from './assets/facilities.avif';
import facilities2 from './assets/facilities2.avif';
import facilities3 from './assets/facilities3.avif';
import interior from './assets/interior.avif';

export const propertyInfo = {
  name: "Mthiyza Properties",
  subtitle: "NSFAS Accredited Student Accommodation",
  location: "Jan Hofmeyer, 1km from UJ Bunting Road Campus",
  whatsappNumber: "+27782889597"
};

export const features = [
  { text: "Furnished Rooms", icon: "Bed" },
  { text: "Shared Rooms", icon: "Users" },
  { text: "10 Shared Bathrooms", icon: "Bath" },
  { text: "Max 20 Occupants", icon: "UserCheck" },
  { text: "Laundry Room", icon: "Wind" },
  { text: "No Deposit", icon: "Banknote" },
  { text: "No Admin Fee", icon: "FileX" },
  { text: "NSFAS Accredited", icon: "Award" }
];

export const security = [
  { text: "Burglar Bars", icon: "Shield" },
  { text: "Electric Fence", icon: "Zap" },
  { text: "On-site Manager", icon: "Briefcase" },
  { text: "Security Officer", icon: "ShieldCheck" },
  { text: "Security Alarm", icon: "BellRing" },
  { text: "24hr Front Desk", icon: "Clock" }
];

export const nearby = [
  { text: "UJ Bunting Road (APB)", distance: "1km" },
  { text: "UJ Auckland Park (APK)", distance: "1.7km" },
  { text: "AFDA Johannesburg", distance: "1.5km" },
  { text: "CTU Training Solutions", distance: "1.8km" },
  { text: "Wits Parktown Campus", distance: "4.1km" },
  { text: "IMM Graduate School", distance: "3.5km" }
];


export const galleryPhotos = [
  { src: exterior, title: "Exterior", category: "Exterior" },
  { src: sharing, title: "Shared Room 1", category: "Shared Rooms" },
  { src: sharing2, title: "Shared Room 2", category: "Shared Rooms" },
  { src: singleRoom, title: "Single Room", category: "Single Room" },
  { src: bathroom, title: "Bathroom", category: "Bathrooms" },
  { src: bathroom2, title: "Bathroom 2", category: "Bathrooms" },
  { src: facilities, title: "Facilities", category: "Facilities" },
  { src: facilities2, title: "Facilities 2", category: "Facilities" },
  { src: facilities3, title: "Facilities 3", category: "Facilities" },
  { src: interior, title: "Interior", category: "Interior" }
];

export const roomTypes = [
  {
    type: "Shared Room",
    price: "R5200",
    features: ["Furnished", "Access to 10 Bathrooms", "Shared Space", "NSFAS Accredited"],
    image: sharing
  },
  {
    type: "Single Room",
    price: "R5200",
    features: ["Furnished", "Access to 10 Bathrooms", "Private Space", "NSFAS Accredited"],
    image: singleRoom
  }
];

export const seoMetadata = {
  title: 'Mthiyza Properties | NSFAS Accredited Student Accommodation near UJ APB',
  description: 'Premium student accommodation at Jan Hofmeyer, just 1km from UJ Auckland Park Bunting Road (APB) Campus. NSFAS accredited, fully furnished single and shared student res rooms. No admin or deposit fees!',
  keywords: [
    'Mthiyza Properties',
    'accommodation near APB',
    'res near APB',
    'student accommodation UJ Bunting Road',
    'NSFAS accredited accommodation APB',
    'UJ Bunting Road student res',
    'student housing Auckland Park',
    'off-campus student accommodation Johannesburg',
    'furnished student rooms Jan Hofmeyer'
  ],
  authors: [{ name: 'Mthiyza Properties' }],
  metadataBase: 'https://www.mthiyzaproperties.co.za',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Mthiyza Properties | NSFAS Accredited Student Res near UJ APB',
    description: 'Secure, furnished student accommodation just 1km from UJ Bunting Road Campus. Zero deposit and zero admin fees. Apply online or WhatsApp us now!',
    url: 'https://www.mthiyzaproperties.co.za',
    siteName: 'Mthiyza Properties',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mthiyza Properties - Student Accommodation near UJ Bunting Road Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mthiyza Properties | Student Res near UJ Bunting Road (APB)',
    description: 'Looking for a res near APB? Mthiyza Properties offers premium, NSFAS-accredited student accommodation with no deposit. WhatsApp +27 78 288 9597.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'Q773eW1fmY3Izef88sPHRny6JYU_jOw9EfwIMis2_yw',
  },
};

