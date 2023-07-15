import { IProduct } from "../utils/IProduct";

// Type: Data
const data = [
  {
    id: 1,
    title: "Chale 1",
    price: 279.11,
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    images: "../../chale.png",
  },
  {
    id: 2,
    title: "Chale 2",
    price: 412.35,
    description: "Pellentesque eget nunc.",
    images: "../../chale.png",
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
  {
    id: 9,
    title: "Chale 9",
    price: 74.65,
    description: "Sed ante.",
    images: "../../chale.png",
  },
  {
    id: 10,
    title: "Chale 10",
    price: 361.37,
    description: "Praesent id massa id nisl venenatis lacinia.",
    images: "../../chale.png",
  },
  {
    id: 11,
    title: "Chale 11",
    price: 100.0,
    description:
      "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    images: "../../chale.png",
  },
  {
    id: 12,
    title: "Chale 12",
    price: 939.08,
    description: "Nullam molestie nibh in lectus. Pellentesque at nulla.",
    images: "../../chale.png",
  },
  {
    id: 13,
    title: "Chale 13",
    price: 808.05,
    description:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    images: "../../chale.png",
  },
  {
    id: 14,
    title: "Chale 14",
    price: 627.5,
    description:
      "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    images: "../../chale.png",
  },
  {
    id: 15,
    title: "Chale 15",
    price: 311.61,
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    images: "../../chale.png",
  },
];

export const products: IProduct[] = data.map((product) => {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    images: product.images,
  };
});
