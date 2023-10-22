import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modify-product',
  templateUrl: 'modify-product.component.html',
  styleUrls: ['modify-product.component.css']
})
export class ModifyProductComponent {
  form: FormGroup; 

  constructor(private formBuilder: FormBuilder) {    
    this.form = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      price: ['']      
    });
  }

  modifyProduct() {  
  }
}
