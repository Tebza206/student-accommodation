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
  whatsappNumber: "+27633274929"
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
  { text: "UJ Bunting Road", distance: "1km" },
  { text: "UJ Auckland Park", distance: "Unknown" },
  { text: "Wits Parktown", distance: "Unknown" },
  { text: "CTU", distance: "Unknown" },
  { text: "IMM", distance: "Unknown" },
  { text: "AFDA", distance: "Unknown" }
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
