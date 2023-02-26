import mount from "./assets/images/mountFuji.png";
import norway from "./assets/images/norway.png";
import opera from "./assets/images/opera.png";

const todoData = [
  {
    id: 1,
    img: mount,
    location: "Japan",
    googleMaps: "https://www.google.com/maps/@6.4520192,3.4308096,12z",
    locationName: "Mount Fuji",
    date: "12 Jan, 2021 - 24 Jan 2022",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  },
  {
    id: 2,
    img: opera,
    location: "Australia",
    googleMaps: "https://www.google.com/maps/@6.4520192,3.4308096,12z",
    locationName: "Syndney Opera House",
    date: "27 May, 2021 - 0 Jun 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
  },
  {
    id: 3,
    img: norway,
    location: "Norway",
    googleMaps: "https://www.google.com/maps/@6.4520192,3.4308096,12z",
    locationName: "Geirangerfjord",
    date: "01 Oct, 2021 - 18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
  },
];

export default todoData;
