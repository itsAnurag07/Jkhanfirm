import img0  from '../assets/Renders_Facade/rg-one-villa-living-room.png';
import img1  from '../assets/Renders_Facade/rg-one-villa-master-bedroom.png';
import img2  from '../assets/Renders_Facade/rg-one-villa-kitchen.png';
import img3  from '../assets/Renders_Facade/signature-facade-lobby.png';
import img4  from '../assets/Renders_Facade/signature-facade-corridor.png';
import img5  from '../assets/Renders_Facade/nik-bakers-interior.png';
import img6  from '../assets/Renders_Facade/lyallpur-bakers-interior.png';
import img7  from '../assets/Renders_Facade/headmaster-salon-interior.png';
import img8  from '../assets/Renders_Facade/creative-studio-workspace.png';
import img9  from '../assets/Renders_Facade/creative-studio-lounge.png';
import img10 from '../assets/Renders_Facade/bhandari-tower-lobby.png';
import img11 from '../assets/Renders_Facade/reefer-cafe-dining.png';
import img12 from '../assets/Renders_Facade/reefer-cafe-bar.png';
import img13 from '../assets/Renders_Facade/octave-showroom-display.png';
import img14 from '../assets/Renders_Facade/tripti-restaurant-main-hall.png';
import img15 from '../assets/Renders_Facade/tripti-restaurant-private-dining.png';

export const interiorImagesMap: Record<string, {
  interiorTitle: string;
  mainImage: string;
  galleryImages: string[];
}> = {
  'RG ONE': {
    interiorTitle: 'Master Bedroom Suite',
    mainImage: img0,
    galleryImages: [img1, img2],
  },
  'signature': {
    interiorTitle: 'Grand Entrance Foyer',
    mainImage: img3,
    galleryImages: [img4],
  },
  'nik-bakers': {
    interiorTitle: 'Designer Living Room',
    mainImage: img5,
    galleryImages: [],
  },
  'the-bakery': {
    interiorTitle: 'Open-Plan Family Lounge',
    mainImage: img6,
    galleryImages: [],
  },
  'headmaster-salon': {
    interiorTitle: 'Luxury Walk-in Wardrobe',
    mainImage: img7,
    galleryImages: [],
  },
  'the-creative-studio': {
    interiorTitle: 'Private Home Study',
    mainImage: img8,
    galleryImages: [img9],
  },
  'Bhandari Tower': {
    interiorTitle: 'Bespoke Dining Room',
    mainImage: img10,
    galleryImages: [],
  },
  'reefer-cafe': {
    interiorTitle: 'Premium Guest Bedroom',
    mainImage: img11,
    galleryImages: [img12],
  },
  'octave-showroom': {
    interiorTitle: 'Spa & Wellness Retreat',
    mainImage: img13,
    galleryImages: [],
  },
  'tripti-restaurant': {
    interiorTitle: 'Home Theatre & Lounge',
    mainImage: img14,
    galleryImages: [img15],
  },
};
