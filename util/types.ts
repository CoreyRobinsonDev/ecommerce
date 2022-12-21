
export enum Category {
  womens = "womens",
  mens = "mens",
  kids = "kids"
}

export type Product = {
  id: number,
  brand: string,
  name: string,
  description: string,
  img1: string,
  img2: string,
  price: number,
  salePrice: number,
  numInStock: number,
  colors: string[]
}