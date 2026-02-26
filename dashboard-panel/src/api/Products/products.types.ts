export type ProductsResponse = {
  title: string;
  price: number;
  description: string;
  category: string;
  id :number
}; 

export type RemoveIdProduct = Omit<ProductsResponse, "id"> 
