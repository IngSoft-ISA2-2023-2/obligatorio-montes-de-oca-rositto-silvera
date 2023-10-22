import {Component, Input} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Product} from "../../../interfaces/product";


@Component({
  selector: 'app-modify-product',
  templateUrl: 'modify-product.component.html',
  styleUrls: ['modify-product.component.css']
})
export class ModifyProductComponent {
  form: FormGroup;

  @Input() currentPrice!: number;
  @Input() currentCode! :number;
  @Input() currentDescription! :string;
  @Input() currentName! :string;
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
  }
}
