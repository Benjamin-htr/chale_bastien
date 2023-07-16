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
    title: "Chale en coton bio",
    price: 720.65,
    description: `
    Découvrez notre magnifique châle en coton, un véritable incontournable pour toutes les fashionistas éthiques ! Fabriqué à partir de coton bio de la plus haute qualité, ce châle vous offre le mélange parfait de confort, de style et de durabilité.   
    
    Son tissu doux et léger en fait l'accessoire idéal pour toutes les saisons. Que ce soit pour vous protéger des frissons de l'hiver ou pour ajouter une touche d'élégance légère pendant les douces soirées d'été, ce châle est polyvalent et s'adapte à toutes les occasions. 
    
    Son design classique et intemporel est rehaussé par des motifs subtils qui lui confèrent une touche d'originalité. Avec ses dimensions généreuses, il peut être porté de multiples façons : enroulé autour du cou, drapé sur les épaules ou même utilisé comme une écharpe élégante. 
    
    Mais ce n'est pas tout ! Ce châle est également respectueux de l'environnement. En choisissant le coton bio, vous contribuez à préserver la planète en soutenant une mode plus durable et en réduisant votre empreinte écologique. Alors, laissez-vous envelopper de douceur et de style avec notre châle en coton bio. Vous ne pourrez plus vous en passer !`,
    images: "../../chale.png",
    reviews: [
      {
        id: 4,
        rate: 5,
        title: "Super châle",
        text: "J'ai acheté ce châle en coton bio et je suis plus heureux que jamais d'avoir une épaule aussi écolo ! Non seulement il est doux et confortable, mais il donne aussi l'impression que je me suis échappé dans un champ de coton bio chaque fois que je le porte. Mon seul problème maintenant, c'est que je suis devenu la coqueluche des abeilles qui pensent que je suis leur nouvelle fleur préférée ! C'est peut-être le prix à payer pour être à la mode et respectueux de l'environnement, mais ça vaut totalement le coup ! Achetez ce châle et préparez-vous à être entouré de compliments et d'insectes adorables !",
        name: "Pierre Cottonbio",
        date: new Date("2022-09-01"),
      },
      {
        id: 5,
        rate: 3,
        title: "Pas mal",
        text: "Bon... comment dire... j'ai acheté ce châle en coton bio dans l'espoir de me sentir comme une déesse écologique. Mais bon sang, je me sens plus proche d'un mouton égaré dans une ferme bio. C'est doux, c'est vrai, mais ça ressemble plus à une couverture de grand-mère qu'à un accessoire tendance. J'ai essayé de le porter de différentes façons, mais je finis toujours par ressembler à une version ratée de Carrie Bradshaw",
        name: "Mel Ina",
        date: new Date("2020-10-01"),
      },
    ],
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
