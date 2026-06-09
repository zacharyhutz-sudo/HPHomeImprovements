const projectAsset = (file) => `/assets/projects/${file}`;

const bathroomImages = Array.from({ length: 18 }, (_, index) => ({
  src: projectAsset(`BR${index + 1}.webp`),
  alt: `Bathroom remodel project ${index + 1} by HP Home Improvements`,
}));

const closetImages = Array.from({ length: 2 }, (_, index) => ({
  src: projectAsset(`C${index + 1}.webp`),
  alt: `Closet project ${index + 1} by HP Home Improvements`,
}));

const deckImages = Array.from({ length: 7 }, (_, index) => ({
  src: projectAsset(`D${index + 1}.webp`),
  alt: `Deck and exterior project ${index + 1} by HP Home Improvements`,
}));

const kitchenImages = Array.from({ length: 5 }, (_, index) => ({
  src: projectAsset(`K${index + 1}.webp`),
  alt: `Kitchen remodel project ${index + 1} by HP Home Improvements`,
}));

const livingRoomImages = Array.from({ length: 6 }, (_, index) => ({
  src: projectAsset(`L${index + 1}.webp`),
  alt: `Living room project ${index + 1} by HP Home Improvements`,
}));

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
  logo: '/assets/hp-logo.png',
  tagline: 'A contractor for the whole project.',
};

export const homeImages = [
  {
    src: deckImages[0].src,
    alt: 'Completed exterior and deck project by HP Home Improvements',
  },
  {
    src: kitchenImages[0].src,
    alt: 'Completed kitchen renovation by HP Home Improvements',
  },
  {
    src: bathroomImages[0].src,
    alt: 'Completed bathroom remodel by HP Home Improvements',
  },
  {
    src: livingRoomImages[0].src,
    alt: 'Finished living room project by HP Home Improvements',
  },
  {
    src: closetImages[0].src,
    alt: 'Custom closet project by HP Home Improvements',
  },
  {
    src: kitchenImages[2].src,
    alt: 'Kitchen detail from a completed renovation by HP Home Improvements',
  },
];

export const projectsHero = {
  src: deckImages[0].src,
  alt: 'Completed deck and exterior project by HP Home Improvements',
};

export const projectGalleries = [
  {
    title: 'Bathrooms',
    slug: 'bathrooms',
    kicker: 'Tile, fixtures, vanities, lighting, and clean finish work.',
    label: 'Bathrooms',
    images: bathroomImages,
  },
  {
    title: 'Closets',
    slug: 'closets',
    kicker: 'Storage upgrades, built-ins, and cleaner organization for everyday spaces.',
    label: 'Closets',
    images: closetImages,
  },
  {
    title: 'Decks & Exteriors',
    slug: 'decks-exteriors',
    kicker: 'Decks, trim, porches, repairs, and exterior improvements.',
    label: 'Exterior',
    images: deckImages,
  },
  {
    title: 'Kitchens',
    slug: 'kitchens',
    kicker: 'Cabinetry, countertops, finishes, and full-room updates.',
    label: 'Kitchens',
    images: kitchenImages,
  },
  {
    title: 'Living Rooms',
    slug: 'living-rooms',
    kicker: 'Comfortable gathering spaces with refreshed finishes and thoughtful details.',
    label: 'Living Rooms',
    images: livingRoomImages,
  },
];

export const services = [
  {
    title: 'Concrete',
    short: 'Foundations and walls to sidewalks and driveways.',
    detail: 'Durable concrete work planned around drainage, finish quality, and the way the space needs to perform long-term.',
    src: deckImages[4]?.src ?? deckImages[0].src,
  },
  {
    title: 'Carpentry',
    short: 'Framing, decks, windows, doors, and custom woodwork.',
    detail: 'Structural and finish carpentry delivered with practical planning, clean craftsmanship, and careful installation.',
    src: deckImages[1]?.src ?? deckImages[0].src,
  },
  {
    title: 'Kitchens',
    short: 'Build a focal point for your home.',
    detail: 'From cabinets and counters to lighting and layout changes, HP helps coordinate the whole kitchen renovation.',
    src: kitchenImages[0].src,
  },
  {
    title: 'Floors',
    short: 'Tile, carpet, hardwood, and finish flooring.',
    detail: 'Flooring updates selected and installed to match your home, timeline, and day-to-day use.',
    src: livingRoomImages[1]?.src ?? livingRoomImages[0].src,
  },
  {
    title: 'Plumbing and Electrical',
    short: 'Utility experts ready to help.',
    detail: 'Project coordination for the behind-the-wall work that helps renovations finish correctly and safely.',
    src: bathroomImages[1]?.src ?? bathroomImages[0].src,
  },
  {
    title: 'Landscaping',
    short: 'Solutions to make your property stand out.',
    detail: 'Exterior improvements that make the outside of the home feel as intentional as the inside.',
    src: deckImages[5]?.src ?? deckImages[0].src,
  },
  {
    title: 'Painting',
    short: 'Whole-house refreshes or single-room updates.',
    detail: 'Interior and exterior painting support with careful prep, clean lines, and guidance through the finish process.',
    src: livingRoomImages[2]?.src ?? livingRoomImages[0].src,
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
