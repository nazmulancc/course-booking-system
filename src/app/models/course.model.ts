export interface Course {
  id: number;
  title: string;
  description: string;
  prices: number;
  img?: string;
  date?: string;
  soldOut: boolean;
  onSale: boolean;
}
