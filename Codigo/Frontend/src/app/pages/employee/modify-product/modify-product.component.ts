import {Component, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Product, ProductClass, ProductDTO} from "../../../interfaces/product";
import {ProductService} from "../../../services/product.service";


@Component({
  selector: 'app-modify-product',
  templateUrl: 'modify-product.component.html',
  styleUrls: ['modify-product.component.css']
})
export class ModifyProductComponent {
  form: FormGroup;
  private productService!: ProductService;

  @Input() currentPrice!: number;
  @Input() currentCode! :number;
  @Input() currentDescription! :string;
  @Input() currentName! :string;
  @Input() currentId! :number;
  @Input() currentPharma! :number;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      price: ['']
    });
  }
  ngOnInit(){
    this.loadForm()
  }
  loadForm(){
    this.form.setValue({
      code: this.currentCode,
      name: this.currentName,
      description: this.currentDescription,
      price: this.currentPrice
    })
  }
  modifyProduct() {

    let code = this.form.get('code')!.value;

    let productToUpdate:Product = new ProductClass(
      this.currentId,
      code,
      this.form.get('name')!.value,
      this.form.get('description')!.value,
      this.form.get('price')!.value,
      this.currentPharma)

    this.productService.updateProduct(productToUpdate)
  }
}
