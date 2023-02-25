import img1 from "./assets/images/cartImg1.png";
import img2 from "./assets/images/cartImg2.png";
import img4 from "./assets/images/cartImg4.png";
const images = { img1, img2, img4 };
const data = [
  {
    id: 1,
    title: "Life lessons with Katie Zaferes",
    description: "interested in life lessons join now",
    price: 136,
    coverImg: images.img1,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Sold Out",
    openspots: 0,
  },
  {
    id: 2,
    title: "Learn wedding photography",
    description: "intrested in weddings join now",
    price: 125,
    coverImg: images.img2,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    openspots: 27,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    description: "interested in biking on mountains join now",
    price: 50,
    coverImg: images.img4,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Online",
    openspots: 38,
  },
];

export default data;
