export const contact = {
  phone: '404-931-3686',
  email: 'greg@hphomeimprovements.com',
  address: '485 Buford Dr #214 Lawrenceville GA, 30046',
  fax: '404-855-2892',
};

export const links = {
  instagram: '#instagram',
  facebook: '#facebook',
  login: '#login',
  yelp: 'https://www.yelp.com/biz/hp-home-improvements-lawrenceville',
  estimate: '#contact',
};

export const brand = {
  logo: 'assets/hp-logo.png',
  tagline: 'A contractor for the whole project.',
};

const project = (file) => `assets/projects/${file}`;

export const homeImages = [
  {
    src: project('K1.webp'),
    alt: 'Finished kitchen project by HP Home Improvements',
  },
  {
    src: project('L1.webp'),
    alt: 'Completed living room improvement by HP Home Improvements',
  },
  {
    src: project('D1.webp'),
    alt: 'Deck and exterior project by HP Home Improvements',
  },
  {
    src: project('BR1.webp'),
    alt: 'Bathroom remodel project by HP Home Improvements',
  },
  {
    src: project('C1.webp'),
    alt: 'Closet project by HP Home Improvements',
  },
  {
    src: project('K2.webp'),
    alt: 'Kitchen detail from an HP Home Improvements project',
  },
];

export const projectsHero = {
  src: project('K1.webp'),
  alt: 'Finished home improvement project by HP Home Improvements',
};

export const projectGalleries = [
  {
    title: 'Bathrooms',
    label: 'BR',
    kicker: 'Tile, fixtures, vanities, lighting, and clean finish work.',
    images: Array.from({ length: 18 }, (_, index) => project(`BR${index + 1}.webp`)),
  },
  {
    title: 'Kitchens',
    label: 'K',
    kicker: 'Cabinetry, countertops, finishes, and full-room updates.',
    images: Array.from({ length: 5 }, (_, index) => project(`K${index + 1}.webp`)),
  },
  {
    title: 'Decks & Exteriors',
    label: 'D',
    kicker: 'Decks, trim, porches, repairs, and exterior improvements.',
    images: Array.from({ length: 7 }, (_, index) => project(`D${index + 1}.webp`)),
  },
  {
    title: 'Living Rooms',
    label: 'L',
    kicker: 'Interior spaces finished with thoughtful details and practical craftsmanship.',
    images: Array.from({ length: 6 }, (_, index) => project(`L${index + 1}.webp`)),
  },
  {
    title: 'Closets',
    label: 'C',
    kicker: 'Storage, finish carpentry, and closet spaces planned around everyday use.',
    images: Array.from({ length: 2 }, (_, index) => project(`C${index + 1}.webp`)),
  },
];

export const services = [
  {
    title: 'Kitchens',
    short: 'Build a focal point for your home.',
    detail: 'From cabinets and counters to lighting and layout changes, HP helps coordinate the whole kitchen renovation.',
    src: project('K1.webp'),
  },
  {
    title: 'Bathrooms',
    short: 'Clean remodels with careful finish work.',
    detail: 'Tile, vanities, fixtures, lighting, repairs, and full bathroom updates planned around the way the room needs to work.',
    src: project('BR1.webp'),
  },
  {
    title: 'Decks & Exteriors',
    short: 'Outdoor improvements built to last.',
    detail: 'Decks, porches, trim, exterior repairs, and improvements that make the outside of the home feel intentional.',
    src: project('D1.webp'),
  },
  {
    title: 'Carpentry',
    short: 'Framing, doors, trim, and custom woodwork.',
    detail: 'Structural and finish carpentry delivered with practical planning, clean craftsmanship, and careful installation.',
    src: project('D2.webp'),
  },
  {
    title: 'Closets',
    short: 'Storage spaces with a more finished feel.',
    detail: 'Closet improvements, shelving, organization, and finish details that make daily use easier.',
    src: project('C1.webp'),
  },
  {
    title: 'Living Spaces',
    short: 'Interior updates that make the whole home feel better.',
    detail: 'Flooring, paint, trim, repair, and room updates coordinated with the finished result in mind.',
    src: project('L1.webp'),
  },
];

export const vendors = [
  { name: 'Wheeler Woodworks', url: '#wheeler-woodworks', specialty: 'Custom woodwork and material support', mark: 'Wheeler\nWood\nWorks' },
  { name: 'Lowe’s', url: 'https://www.lowes.com', specialty: 'Building materials, tools, and jobsite supplies', mark: 'LOWE’S' },
  { name: 'Home Depot', url: 'https://www.homedepot.com', specialty: 'Materials, hardware, and project essentials', mark: 'HOME\nDEPOT' },
  { name: 'Sherwin Williams', url: 'https://www.sherwin-williams.com', specialty: 'Paint, coatings, color, and finish support', mark: 'Sherwin\nWilliams' },
  { name: 'Floor & Decor', url: 'https://www.flooranddecor.com', specialty: 'Tile, flooring, stone, and surface materials', mark: 'FLOOR &\nDECOR' },
];

export const processSteps = [
  { title: 'Walkthrough', text: 'We listen to the project goals, inspect the space, and identify the practical details that shape the work.' },
  { title: 'Plan', text: 'We organize scope, materials, trades, and schedule so the project has a clear path before work begins.' },
  { title: 'Build', text: 'We coordinate the work, communicate along the way, and keep the finished result in view.' },
  { title: 'Finish', text: 'We close the loop with punch-list details and a final walkthrough before the project is complete.' },
];
