import { Component, OnInit } from '@angular/core';
import { cilCart, cilPlus, cilCompass, cilCheckCircle, cilTrash } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { Drug } from 'src/app/interfaces/drug';
import { RecommendedProduct } from 'src/app/interfaces/recomendedProduct';
import { StorageManager } from '../../../utils/storage-manager';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/CommonService';
import { Product } from '../../../interfaces/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Drug[] = [];
  products: Product[] = [];
  RecommendedProduct: Product[] = [];
  total: number = 0;
  




  constructor(
    public iconSet: IconSetService,
    private storageManager: StorageManager,
    private router: Router,
    private productService: ProductService,
    private commonService: CommonService) {
    iconSet.icons = { cilCart, cilPlus, cilCompass, cilCheckCircle, cilTrash };
   
  }

  

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.RecommendedProduct = data.map(product => ({
        ...product,
        selectedQuantity: 0
      }));});
    this.cart = JSON.parse(this.storageManager.getData('cart'));
    if (!this.cart) {
      this.cart = [];
      this.storageManager.saveData('cart', JSON.stringify(this.cart));
    }
    /*if(!this.additionalProducts){
      this.additionalProducts = [];
      this.storageManager.saveData('additionalProducts', JSON.stringify(this.additionalProducts));
    }*/
    this.storageManager.saveData('total', JSON.stringify(0));
    this.updateTotal();
  }


  addToCart(recommendedProduct: RecommendedProduct) {
    // Agrega la lógica para agregar productos recomendados al carrito
    // Puedes usar una lógica similar a la que tienes para agregar drogas al carrito
  }

  addAditionalProducts(recommendedProduct: Product) {
    // Añadir el producto adicional al carrito
    this.products.push(recommendedProduct); // Agregar el producto a la lista additionalProducts
    this.updateTotal(); // Actualizar el total del carrito
  }
  
  



  delete(index: number){
    this.cart = JSON.parse(this.storageManager.getData('cart'));
    this.cart.splice(index, 1);
    this.storageManager.saveData('cart', JSON.stringify(this.cart));
    this.updateTotal();
    this.updateHeader(this.cart.length);
  }

  updateTotal(){
    this.total = 0;
    this.cart = JSON.parse(this.storageManager.getData('cart'));
    for(let item of this.cart){
      this.total += (item.price * item.quantity);
    }

    for (let recommendedProduct of this.products) {
      this.total += recommendedProduct.price * recommendedProduct.selectedQuantity;
    }
  }

  updateHeader(value: number){
    this.commonService.updateHeaderData(value);
   }

  goToCho(){
    this.storageManager.saveData('additionalProducts', JSON.stringify(this.products));
    this.storageManager.saveData('total', JSON.stringify(this.total));
    this.router.navigate(['/home/cart/cho']);
  }

  incrementQuantity(recommendedProduct: Product) {
    if (recommendedProduct.selectedQuantity >=0) {
      recommendedProduct.selectedQuantity++;
    }
  }
  
  decrementQuantity(recommendedProduct: Product) {
    if (recommendedProduct.selectedQuantity >= 0) {
      recommendedProduct.selectedQuantity--;
    }
  }
  
  
}
