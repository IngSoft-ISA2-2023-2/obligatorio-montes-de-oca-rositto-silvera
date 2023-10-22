export interface recommendedProducts {
  id: number;
  code: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  pharmacy: {
    id: number;
    name: string;  
  };
  
}

export class RecommendedProduct {
  id: number;
  code: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  selectedQuantity: number = 0;
  pharmacyName: string = "";

  constructor(id: number, code: string, name: string, description: string, quantity: number, price: number, pharmacyName: string) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.pharmacyName = pharmacyName;
  }
}



