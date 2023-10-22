export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    pharmacy: {
      id: number;
      name: string;  
    };
}
