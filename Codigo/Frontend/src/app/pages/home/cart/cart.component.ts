import { Component, OnInit } from '@angular/core';
import { cilCart, cilPlus, cilCompass, cilCheckCircle, cilTrash } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { Drug } from 'src/app/interfaces/drug';
import { RecommendedProduct } from 'src/app/interfaces/recomendedProduct';
import { StorageManager } from '../../../utils/storage-manager';
import { Router } from '@angular/router';
import { CommonService } from '../../../services/CommonService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Drug[] = [];
  total: number = 0;
  recommendedProducts: RecommendedProduct[] = [
    new RecommendedProduct(1, 'P1', 'Recommended Product 1', 'Description 1', 10, 25.0),
    new RecommendedProduct(2, 'P2', 'Recommended Product 2', 'Description 2', 5, 30.0),
    new RecommendedProduct(3, 'P3', 'Recommended Product 3', 'Description 3', 8, 15.0),
  ];

  additionalProducts: RecommendedProduct[] = [  // Nuevo array additionalProducts
   
  ];




  constructor(
    public iconSet: IconSetService,
    private storageManager: StorageManager,
    private router: Router,
    private commonService: CommonService) {
    iconSet.icons = { cilCart, cilPlus, cilCompass, cilCheckCircle, cilTrash };
    
  }

  

  ngOnInit(): void {
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

  addAditionalProducts(recommendedProduct: RecommendedProduct) {
    // Añadir el producto adicional al carrito
    this.additionalProducts.push(recommendedProduct); // Agregar el producto a la lista additionalProducts
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

    for (let recommendedProduct of this.additionalProducts) {
      this.total += recommendedProduct.price * recommendedProduct.selectedQuantity;
    }
  }

  updateHeader(value: number){
    this.commonService.updateHeaderData(value);
   }

  goToCho(){
    this.storageManager.saveData('additionalProducts', JSON.stringify(this.additionalProducts));
    this.storageManager.saveData('total', JSON.stringify(this.total));
    this.router.navigate(['/home/cart/cho']);
  }

  incrementQuantity(recommendedProduct: RecommendedProduct) {
    if (recommendedProduct.selectedQuantity < recommendedProduct.quantity) {
      recommendedProduct.selectedQuantity++;
    }
  }
  
  decrementQuantity(recommendedProduct: RecommendedProduct) {
    if (recommendedProduct.selectedQuantity > 0) {
      recommendedProduct.selectedQuantity--;
    }
  }
  
  
}
