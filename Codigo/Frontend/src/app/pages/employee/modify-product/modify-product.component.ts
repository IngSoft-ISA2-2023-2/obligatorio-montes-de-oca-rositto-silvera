import {Component, EventEmitter, Input, Output} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Product, ProductClass, ProductDTOOut, ProductDTOOutNew} from "../../../interfaces/product";
import {ProductService} from "../../../services/product.service";
import { CommonService } from 'src/app/services/CommonService';


@Component({
  selector: 'app-modify-product',
  templateUrl: 'modify-product.component.html',
  styleUrls: ['modify-product.component.css']
})
export class ModifyProductComponent {
  form: FormGroup;

  @Input() currentPrice!: number;
  @Input() currentCode! :string;
  @Input() currentDescription! :string;
  @Input() currentName! :string;
  @Input() currentId! :number;

  loaded:boolean = false;

  @Output() notify = new EventEmitter<boolean>();

  constructor(private commonService: CommonService,
              private formBuilder: FormBuilder,
              private productService: ProductService) {
    this.form = this.formBuilder.group({
      code: [''],
      name: [''],
      description: [''],
      price: ['']
    });
  }

  ngOnInit(){
    //this.loadForm()
  }
  
  loadAndWait(){
    if(!this.loaded){
      this.loadForm();
      this.loaded = true;
    }
  }

  unload(){
    this.loaded = false;
    this.form.reset();
  }

  loadForm(){
    this.form.setValue({
      code: this.currentCode,
      name: this.currentName,
      description: this.currentDescription ? this.currentDescription : "",
      price: this.currentPrice
    })
  }

  modifyProduct() {

    

    let productToUpdate:Product = new ProductDTOOutNew(
      this.currentCode,
      this.form.get('name')!.value,
      this.form.get('description')!.value,
      this.form.get('price')!.value
      )

    this.productService.updateProduct(productToUpdate).subscribe((prod) => {
      this.form.reset();

      if (prod){
        this.commonService.updateToastData(
          `Success creating "${prod.code} - ${prod.name}"`,
          'success',
          'Product created.'
        );
      }
    });;
  }
}
