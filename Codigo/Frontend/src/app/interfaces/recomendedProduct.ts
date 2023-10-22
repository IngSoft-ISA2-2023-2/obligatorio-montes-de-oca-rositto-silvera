export interface recommendedProducts {
  id: number;
  code: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  
}

export class RecommendedProduct {
  id: number;
  code: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  selectedQuantity: number = 0;

  constructor(id: number, code: string, name: string, description: string, quantity: number, price: number) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }
}



