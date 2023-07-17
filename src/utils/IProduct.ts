export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  reviews?: IReview[];
}

export interface IReview {
  id: number;
  rate: number;
  title: string;
  text: string;
  name: string;
  date: Date;
}
