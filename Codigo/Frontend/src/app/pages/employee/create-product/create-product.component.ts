import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: 'create-product.component.html',
  styleUrls: ['create-product.component.css']
})
export class CreateProductComponent {
  form: FormGroup; 

  constructor(private formBuilder: FormBuilder) {    
    this.form = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      price: ['']      
    });
  }

  createProduct() {  
  }
}
