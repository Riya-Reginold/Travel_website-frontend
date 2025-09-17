const basePath = process.env.NODE_ENV === 'production' ? '/Travel_website-frontend' : '';
export const destinationData = [
  {
    id: 1,
    image: `${basePath}/images/germany.jpg`,
    country: "Germany",
    travelers: "150,000",
  },
  {
    id: 2,
    image: `${basePath}/images/France.jpg`,
    country: "France",
    travelers: "250,000",
  },
  {
    id: 3,
    image: `${basePath}/images/canada.jpg`,
    country: "Canada",
    travelers: "180,000",
  },
  {
    id: 4,
    image: `${basePath}/images/italy.jpg`,
    country: "Italy",
    travelers: "200,000",
  },
  {
    id: 5,
    image: `${basePath}/images/Australia.jpg`,
    country: "Australia",
    travelers: "120,000",
  },
  {
    id: 6,
    image: `${basePath}/images/greece.jpg`,
    country: "Greece",
    travelers: "175,000",
  },
  {
    id: 7,
    image: `${basePath}/images/japan.jpg`,
    country: "Japan",
    travelers: "160,000",
  },
  {
    id: 8,
    image: `${basePath}/images/switz.jpg`,
    country: "Switzerland",
    travelers: "140,000",
  },
];

export const hotelsData = [
  {
    id: 1,
    image: `${basePath}/images/h1.jpg`,
    name: "The Grand London Resort and Spa",
    location: "Westminster, London",
    rating: 4.6,
    reviews: "2,345",
    price: "500",
  },
  {
    id: 2,
    image: `${basePath}/images/h2.jpg`,
    name: "Barcelona City Suites Deluxe Hotel",
    location: "Ciutat Vella, Barcelona",
    rating: 4.7,
    reviews: "1,912",
    price: "400",
  },
  {
    id: 3,
    image: `${basePath}/images/h3.jpg`,
    name: "Times Square Premium Stay Hotel",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: "3,420",
    price: "950",
  },
  {
    id: 4,
    image: `${basePath}/images/h4.jpg`,
    name: "Hilton Roma Luxury Hotel Palace",
    location: "Vaticano Prati, Rome",
    rating: 4.5,
    reviews: "2,876",
    price: "680",
  },
];



