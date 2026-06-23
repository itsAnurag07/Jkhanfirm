import ramRender from '../assets/images/Ram_1.png';
import ramFront from '../assets/images/Ram_2.png';
import ramAdidas from '../assets/images/Ram&Addidas_1.png';
import pprRender from '../assets/images/PPR_3.png';
import ppr1 from '../assets/images/PPR_1.png';
import palmCity from '../assets/images/PalmCity_1.png';
import palmCityFront from '../assets/images/PalmCity_2.png';
const palmCityVideo = "https://gsqaqwta9wyxwxoj.public.blob.vercel-storage.com/palmcity-video.mp4";
import hamiltonTower from '../assets/images/Hamilton -Portfolio.png';
import signature from '../assets/images/Signature_Latest.png';
import interiorDesign from '../assets/images/Interior design& planing.png';
import diljitTower1 from '../assets/images/Diljittower_1.png';
import diljitTower2 from '../assets/images/DiljitTower2.png';
import nikBakers from '../assets/images/Nikbakers.png';
import bakery1 from '../assets/images/Bakery_1.png';
import headmaster from '../assets/images/Headmaster.png';
import reefer from '../assets/images/Reefer.png';
import studio from '../assets/images/Studio.png';
import vivo from '../assets/images/VIVO.png';
import octave from '../assets/images/octave.png';
import tripti from '../assets/images/tripti.png';

export interface Project {
  id: string;
  title: string;
  location: string;
  scope: string;
  size: string;
  year: string;
  description: string;
  mainImage: string;
  galleryImages: string[];
  featured?: boolean;
  heroVideo?: string;
  portrait?: boolean;
}

export const projects: Project[] = [
  {
    id: 'RG ONE',
    title: 'RG ONE Villa',
    location: 'Jalandhar, Punjab',
    scope: 'Architecture & Interior Design',
    size: '14,200 Sq. Ft.',
    year: '2024',
    description:
      'A sweeping contemporary villa merging exposed concrete frames with warm stone cladding. Features double-height atriums flooded with natural light and a cantilevered pool deck offering panoramic city views.',
    mainImage: ramFront,
    galleryImages: [ramRender],
  },
  {
    id: 'ppr-market-complex',
    title: 'PPR Market Complex',
    location: 'Jalandhar, Punjab',
    scope: 'Turn-key Construction & Styling',
    size: '18,000 Sq. Ft.',
    year: '2023',
    description:
      'A landmark commercial complex blending terracotta masonry with raw concrete structural elements, featuring wide covered walkways, central plaza, and curated retail spaces.',
    mainImage: ppr1,
    galleryImages: [pprRender, ppr1],
  },
  {
    id: 'palm-city-estates',
    title: 'Palm City Estates',
    location: 'Jalandhar, Punjab',
    scope: 'Architecture & Landscaping',
    size: '22,500 Sq. Ft.',
    year: '2024',
    description:
      'An upscale residential township concept with villa clusters set around a central palm-lined garden incorporating passive cooling design.',
    mainImage: palmCityFront,
    galleryImages: [palmCity],
    featured: true,
    heroVideo: palmCityVideo,
  },
  {
    id: 'hamilton-tower',
    title: 'Hamilton Tower',
    location: 'Jalandhar, Punjab',
    scope: 'High-rise Architecture',
    size: '45,000 Sq. Ft.',
    year: '2025',
    description:
      'A 12-storey mixed-use tower featuring a curtain-wall glass facade, sky lobbies, and ground-level commercial arcade. Engineered for seismic compliance with premium façade detailing.',
    mainImage: hamiltonTower,
    galleryImages: [],
  },
  {
    id: 'signature',
    title: 'Signature',
    location: 'Jalandhar, Punjab',
    scope: 'Interior Design & Planning',
    size: '8,800 Sq. Ft.',
    year: '2024',
    description:
      'A bespoke interior fit-out project for a luxury penthouse featuring Italian marble flooring, custom joinery, and curated art installations that define an elevated residential lifestyle.',
    mainImage: signature,
    galleryImages: [interiorDesign],
  },
  {
    id: 'diljit-tower',
    title: 'Diljit Tower',
    location: 'Jalandhar, Punjab',
    scope: 'Architecture & Construction',
    size: '38,000 Sq. Ft.',
    year: '2024',
    description:
      'A state-of-the-art commercial high-rise tower featuring an energy-efficient glass facade, dynamic structural columns, and luxury corporate interiors.',
    mainImage: diljitTower1,
    galleryImages: [diljitTower2],
  },
  {
    id: 'nik-bakers',
    title: 'Nik Bakers',
    location: 'Ludhiana, Punjab',
    scope: 'Interior Design & Turn-key Fit-out',
    size: '4,200 Sq. Ft.',
    year: '2024',
    description:
      'A premium bakery and cafe interior featuring warm wood tones, custom display counters, elegant pendant lighting, and a cozy seating layout.',
    mainImage: nikBakers,
    galleryImages: [],
    portrait: true,
  },
  {
    id: 'the-bakery',
    title: 'The Bakery & Pastry Shop',
    location: 'Ludhiana, Punjab',
    scope: 'Interior Design & Styling',
    size: '3,800 Sq. Ft.',
    year: '2024',
    description:
      'An elegant artisan bakery shop featuring custom glass display vitrines, polished brass accents, and a warm, inviting dining area.',
    mainImage: bakery1,
    galleryImages: [],
    portrait: true,
  },
  {
    id: 'headmaster-salon',
    title: 'Headmaster Salon',
    location: 'Jalandhar, Punjab',
    scope: 'Interior Design & Construction',
    size: '3,500 Sq. Ft.',
    year: '2023',
    description:
      'A high-end luxury salon design with plush velvet seating, customized mirrors with integrated LED ring lights, and premium marble styling stations.',
    mainImage: headmaster,
    galleryImages: [],
  },
  {
    id: 'ram-adidas',
    title: 'Ram & Adidas Showroom',
    location: 'Jalandhar, Punjab',
    scope: 'Retail Design & Styling',
    size: '6,500 Sq. Ft.',
    year: '2024',
    description:
      'A modern, high-energy retail environment designed for Adidas, featuring dynamic lighting, interactive product displays, and sleek industrial shelving.',
    mainImage: ramAdidas,
    galleryImages: [],
  },
  {
    id: 'the-creative-studio',
    title: 'The Creative Studio',
    location: 'Jalandhar, Punjab',
    scope: 'Architecture & Interior Design',
    size: '3,000 Sq. Ft.',
    year: '2024',
    description:
      'A minimalist architectural office showcasing concrete finishes, open-plan work desks, and full-height steel-framed glass windows facing a private courtyard.',
    mainImage: studio,
    galleryImages: [],
    portrait: true,
  },
  {
    id: 'Bhandari Tower',
    title: 'Bhandari Tower',
    location: 'Amritsar, Punjab',
    scope: 'Commercial Interior Design',
    size: '4,500 Sq. Ft.',
    year: '2024',
    description:
      'A high-tech mobile experience store featuring minimalist white acrylic surfaces, recessed blue accent lighting, and custom demo counters.',
    mainImage: vivo,
    galleryImages: [],
  },
  {
    id: 'reefer-cafe',
    title: 'Reefer Cafe',
    location: 'Jalandhar, Punjab',
    scope: 'Interior Design & Construction',
    size: '2,800 Sq. Ft.',
    year: '2024',
    description:
      'A chic café with exposed brickwork, custom metal lighting fixtures, comfortable leather booths, and an open bar area.',
    mainImage: reefer,
    galleryImages: [],
  },
  {
    id: 'octave-showroom',
    title: 'Octave Showroom',
    location: 'Ludhiana, Punjab',
    scope: 'Retail Interior Design',
    size: '5,200 Sq. Ft.',
    year: '2023',
    description:
      'A premium fashion showroom with custom wooden cabinetry, strategic track lighting, and a luxurious lounge area for clients.',
    mainImage: octave,
    galleryImages: [],
  },
  {
    id: 'tripti-restaurant',
    title: 'Tripti Restaurant & Banquets',
    location: 'Jalandhar, Punjab',
    scope: 'Architecture & Interior Design',
    size: '12,000 Sq. Ft.',
    year: '2023',
    description:
      'A massive fine dining restaurant and banquet facility showcasing custom brass light fixtures, coffered ceilings, and rich upholstered seating.',
    mainImage: tripti,
    galleryImages: [],
    portrait: true,
  },
];
