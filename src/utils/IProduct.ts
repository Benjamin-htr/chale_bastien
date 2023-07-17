export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  reviews?: IReview[];
  quantity?: number;
}

export interface IReview {
  id: number;
  rate: number;
  title: string;
  text: string;
  name: string;
  date: Date;
}
