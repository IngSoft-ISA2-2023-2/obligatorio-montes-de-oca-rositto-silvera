export interface Product {
    id: number;
    code: number;
    name: string;
    description: string;
    price: number;
    pharmacy: {
      id: number;
      name: string;
    };
}
export class ProductClass {
  id: number;
  code: number;
  name: string;
  description: string;
  price: number;
  pharmacy: {
    id: number;
    name: string;
  };
  constructor(id: number, code: number, name: string, description: string, pharmacy: {id: number, name: string}, price: number) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.pharmacy = pharmacy;
    this.description = description;
    this.price = price;
  }

}


