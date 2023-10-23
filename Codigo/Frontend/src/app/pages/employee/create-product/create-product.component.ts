import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductDTOOut } from 'src/app/interfaces/product';
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-create-product',
  templateUrl: 'create-product.component.html',
  styleUrls: ['create-product.component.css']
})
export class CreateProductComponent {
  form: FormGroup; 

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService) {    
    this.form = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      price: ['']      
    });
    
  }

  hitCreateProduct() {  
    let result = new ProductDTOOut(
      -1,
      this.form.get('code')!.value,
      this.form.get('name')!.value,
      this.form.get('description')!.value,
      this.form.get('price')!.value
    )
    this.productService.createProduct(result);
  }
}

//Loporempe ippisumpu dopolorpo