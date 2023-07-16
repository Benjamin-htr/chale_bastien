import { IProduct } from "../utils/IProduct";

// Type: Data
export const products: IProduct[] = [
  {
    id: 1,
    title: "Châle en laine",
    price: 120,
    description:
      "Châle de qualité supérieure, fabriqué en France, 100% laine, 100% artisanal, 100% fait main. Ce châle est l'achat idéal pour les personnes qui souhaitent se couvrir les épaules avec élégance et raffinement. (Il est très doux et agréable à porter.)",
    images: "../../chale.png",
    reviews: [
      {
        id: 1,
        rate: 5,
        title: "De la pure folie !",
        text: "Ce produit est une pure merveille. Je le recommande à tous mes amis ! Sauf à Jack, car il est trop con.",
        name: "Hubert Bonisseur de La Bath",
        date: new Date("1117-01-01"),
      },
      {
        id: 2,
        rate: 3,
        title: "Pas mal",
        text: "J'ai connu mieux, mais c'est pas mal.",
        name: "Serge Riaboukine",
        date: new Date("2020-10-01"),
      },
    ],
  },
  {
    id: 2,
    title: "Châle blanc émaillé",
    price: 89,
    description:
      "Châle blanc émaillé, fabriqué en France, 100% laine, 100% artisanal, 100% fait main. Ce châle est parfait en été de par sa grande maille qui permet de laisser passer l'air.",
    images: "../../chale.png",
    reviews: [
      {
        id: 3,
        rate: 1,
        title: "Vraiment agréable",
        text: "Châle qui paisse àasser l'aire, pour l'hiver c'est pas mal.",
        name: "Jean-Michel Apeuprès",
        date: new Date("2022-09-01"),
      },
    ],
  },
  {
    id: 3,
    title: "Chale 3",
    price: 720.65,
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    images: "../../chale.png",
  },
  {
    id: 4,
    title: "Chale 4",
    price: 462.96,
    description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    images: "../../chale.png",
  },
  {
    id: 5,
    title: "Chale 5",
    price: 31.97,
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    images: "../../chale.png",
  },
  {
    id: 6,
    title: "Chale 6",
    price: 531.4,
    description: "In hac habitasse platea dictumst.",
    images: "../../chale.png",
  },
  {
    id: 7,
    title: "Chale 7",
    price: 49.46,
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    images: "../../chale.png",
  },
  {
    id: 8,
    title: "Chale 8",
    price: 698.37,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    images: "../../chale.png",
  },
];
