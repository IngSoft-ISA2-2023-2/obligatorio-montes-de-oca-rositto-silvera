export interface Product {
    id: number;
    code: number;
    name: string;
    description: string;
    price: number;
    pharmacyId: number;
}
export class ProductClass {
  id: number;
  code: number;
  name: string;
  description: string;
  price: number;
  pharmacyId: number;
  constructor(id: number, code: number, name: string, description: string, pharmacyId: number, price: number) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.pharmacyId = pharmacyId;
    this.description = description;
    this.price = price;
  }

}

export class ProductDTO{
  id:number;
  code:number;
  name:string;
  description:string;
  price: number;
  pharmacyId: number;

  constructor(id:number,code:number, name:string, description:string, price: number,pharmacyId: number) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.price = price;
    this.pharmacyId = pharmacyId;
  }
}

