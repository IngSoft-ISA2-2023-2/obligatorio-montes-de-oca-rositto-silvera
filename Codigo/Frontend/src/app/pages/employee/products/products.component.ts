import {Component, OnInit, ViewChild} from '@angular/core';
import { cilUser, cilLockLocked, cilArrowThickRight } from '@coreui/icons';
import { cilCheckAlt, cilX } from '@coreui/icons';
import { ProductService } from '../../../services/product.service';
import { Product , ProductClass} from '../../../interfaces/product';
import { CommonService } from '../../../services/CommonService';
import {ModifyProductComponent} from "../modify-product/modify-product.component";
import { timeout } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  icons = { cilUser, cilLockLocked, cilArrowThickRight };


  @ViewChild(ModifyProductComponent)
  childModify!: ModifyProductComponent;
  products: ProductClass[] = [];
  emptyProduct: ProductClass = new ProductClass(0,"23442",'Pantene','Lorem ipsum Dolor Amet Cesarum Lumina',0,0);
  targetItem: any = undefined;
  visible = false;
  modalTitle = '';
  modalMessage = '';
  currentId:number = -1;
  currentCode: string = "";
  currentName:string = "";
  currentDescription: string = "";
  currentPrice: number = 0;

  constructor(
    private commonService: CommonService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProductsByUser();
  }


  getProductsByUser() {
    this.productService.getProducts().subscribe((d: any) => (this.products = d));
  }

  deleteDrug(index: number): void {
    for (let product of this.products) {
      if (product.id === index) {
        this.targetItem = product;
        break;
      }
    }
    if (this.targetItem) {
      this.modalTitle = 'Delete Product';
      this.modalMessage = `Deleting '${this.targetItem.code} - ${this.targetItem.name}'. Are you sure ?`;
      this.visible = true;
    }
  }

  closeModal(): void {
    this.visible = false;
  }

  saveModal(event: any): void {
    if (event) {
      this.productService.deleteProduct(this.targetItem.id).subscribe((p: any) => {
        if (p) {
          this.visible = false;
          this.getProductsByUser();
          this.commonService.updateToastData(
            `Success deleting product "${this.targetItem.code} - ${this.targetItem.name}"`,
            'success',
            'Product deleted.'
          );
        }
      });
    }
  }

  loadProduct(product: ProductClass) {
    this.currentId = product.id;
    this.currentCode = product.code;
    this.currentName = product.name;
    this.currentPrice = product.price;
    this.currentDescription = product.description;
    this.childModify.unload();
  }

  onExpected(expectant: boolean){
    this.childModify.loadForm();
  }

}
