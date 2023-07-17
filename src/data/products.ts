import { IProduct } from "../utils/IProduct";

// Type: Data
export const products: IProduct[] = [
  {
    id: 1,
    title: "Châle en laine",
    price: 120,
    description:
      "Châle de qualité supérieure, fabriqué au Tibet, 100% laine, 100% artisanal, 100% fait main. Ce châle est l'achat idéal pour les personnes qui souhaitent se couvrir les épaules avec élégance et raffinement. (Il est très doux et agréable à porter.)",
    images: [
      "../../chale_laine.jpg",
      "../../chale_laine_coloris_1.jpg",
      "../../chale_laine_coloris_2.jpg",
      "../../chale_laine_coloris_3.jpg",
    ],
    reviews: [
      {
        id: 1,
        rate: 5,
        title: "De la pure folie !",
        text: "Ce produit est une pure merveille. Je le recommande à tous mes amis ! Sauf à Jack (un bon pote), car il a mauvaaaiis goût.",
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
      "Châle blanc émaillé, fabriqué au Tibet, 100% laine, 100% artisanal, 100% fait main. Ce châle est parfait en été de par sa grande maille qui permet de laisser passer l'air.",
    images: ["../../chale.png"],
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
    price: 200,
    description: `
    Découvrez notre magnifique châle en coton, un véritable incontournable pour toutes les fashionistas éthiques ! Fabriqué à partir de coton bio de la plus haute qualité, ce châle vous offre le mélange parfait de confort, de style et de durabilité.
    
    Ce châle est fabriqué au tibet par des artisans locaux qui utilisent des techniques traditionnelles pour créer des produits de qualité supérieure. Il est disponible en trois couleurs différentes.
    
    `,
    images: [
      "../../chale_bio.jpg",
      "../../chale_bio_coloris_1.jpg",
      "../../chale_bio_coloris_2.jpg",
      "../../chale_bio_coloris_3.jpg",
    ],
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
];
