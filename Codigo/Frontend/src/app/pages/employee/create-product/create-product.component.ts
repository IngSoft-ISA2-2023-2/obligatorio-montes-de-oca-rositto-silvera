import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductDTOOutNew } from 'src/app/interfaces/product';
import {ProductService} from "../../../services/product.service";
import { CommonService } from 'src/app/services/CommonService';

@Component({
  selector: 'app-create-product',
  templateUrl: 'create-product.component.html',
  styleUrls: ['create-product.component.css']
})
export class CreateProductComponent {
  form: FormGroup | any; 

  constructor(private commonService: CommonService,
              private formBuilder: FormBuilder,
              private productService: ProductService) 
    {    
    this.form = this.formBuilder.group({
      code: new FormControl(),
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl()      
      });
    
    }

  get name(): AbstractControl {
    return this.form.controls.name;
  }

  get code(): AbstractControl {
    return this.form.controls.code;
  }
  get description(): AbstractControl {
    return this.form.controls.description;
  }

  get price(): AbstractControl {
    return this.form.controls.price;
  }

  hitCreateProduct(): void {  
    let result = new ProductDTOOutNew(
      this.code.value,
      this.name.value,
      this.description.value,
      this.price.value
    );
    this.productService.createProduct(result).subscribe((prod) => {
      this.form.reset();

      if (prod){
        this.commonService.updateToastData(
          `Success creating "${prod.code} - ${prod.name}"`,
          'success',
          'Product created.'
        );
      }
    }
    );;
  }
}

//Loporempe ippisumpu dopolorpo