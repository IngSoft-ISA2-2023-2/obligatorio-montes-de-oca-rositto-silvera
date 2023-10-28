export interface Product {
    code: string;
    name: string;
    description: string;
    price: number;
    selectedQuantity : number;
}

export class ProductClass {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
  pharmacyId: number;
  selectedQuantity = 0;
  constructor(id: number, code: string, name: string, description: string, pharmacyId: number, price: number) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.pharmacyId = pharmacyId;
    this.description = description;
    this.price = price;
  }

}

export class ProductDTOOut{
  id:number;
  code:string;
  name:string;
  description:string;
  price: number;

  constructor(id:number,code:string, name:string, description:string, price: number) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}

export class ProductDTOOutNew{
  code:string;
  name:string;
  description:string;
  price: number;
  selectedQuantity = 0;
  constructor(code:string, name:string, description:string, price: number) {
    this.code = code;
    this.name = name;
    this.description = description;
    this.price = price;
    
  }
}
