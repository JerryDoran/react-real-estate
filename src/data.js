import imageOne from "./images/imageOne.jpg";
import imageTwo from "./images/imageTwo.jpg";
import imageThree from "./images/imageThree.jpg";
import imageFour from "./images/imageFour.jpg";
import interior from "./images/interior.jpg";
import exterior from "./images/exterior.jpg";

export const menuData = [
  { title: "About", link: "/about" },
  { title: "Homes", link: "/homes" },
  { title: "Rentals", link: "/rentals" }
];

export const slides = [
  {
    title: "Luxury Villa in Bali, Indonesia",
    price: "$4,280.00",
    path: "/homes",
    label: "View Home",
    image: imageOne,
    alt: "House"
  },
  {
    title: "House in San Jose, Costa Rica",
    price: "$2,480.00",
    path: "/homes",
    label: "View Home",
    image: imageTwo,
    alt: "House"
  },
  {
    title: "House in Calabasses, California",
    price: "$8,280.00",
    path: "/homes",
    label: "View Home",
    image: imageThree,
    alt: "House"
  },
  {
    title: "House in Houston, Texas",
    price: "$6,280.00",
    path: "/homes",
    label: "View Home",
    image: imageFour,
    alt: "House"
  }
];

export const infoData = [
  {
    heading: "Explore our beautiful homes",
    paragraphOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    paragraphTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut",
    buttonLabel: "View Homes",
    image: exterior,
    reverse: false,
    delay: 100
  },

  {
    heading: "Modern Designs",
    paragraphOne:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    paragraphTwo:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut",
    buttonLabel: "View Homes",
    image: interior,
    reverse: true,
    delay: 300
  }
];
