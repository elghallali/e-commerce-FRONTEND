import { Category } from './category';

export class Product {
  id?: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
  createAt: string | undefined;
  lastUpdate: string | undefined;
  description: string;
  status: string | undefined;
  constructor(name: string, price: number, stock: number, category: Category, description: string) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.category = category;
    this.description = description;
  }
}
