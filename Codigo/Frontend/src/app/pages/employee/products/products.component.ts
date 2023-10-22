import { Component, OnInit } from '@angular/core';
import { cilUser, cilLockLocked, cilArrowThickRight } from '@coreui/icons';
import { cilCheckAlt, cilX } from '@coreui/icons';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { CommonService } from '../../../services/CommonService';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  icons = { cilUser, cilLockLocked, cilArrowThickRight };

  products: Product[] = [];
  targetItem: any = undefined;
  visible = false;
  modalTitle = '';
  modalMessage = '';

  constructor(
    private commonService: CommonService,
    private producyService: ProductService
  ) {}

  ngOnInit(): void {
    this.getDrugsByUser();
  }

  getDrugsByUser() {
    this.drugService.getDrugsByUser().subscribe((d: any) => (this.drugs = d));
  }

  deleteDrug(index: number): void {
    for (let drug of this.drugs) {
      if (drug.id === index) {
        this.targetItem = drug;
        break;
      }
    }
    if (this.targetItem) {
      this.modalTitle = 'Delete Drug';
      this.modalMessage = `Deleting '${this.targetItem.code} - ${this.targetItem.name}'. Are you sure ?`;
      this.visible = true;
    }
  }

  closeModal(): void {
    this.visible = false;
  }

  saveModal(event: any): void {
    if (event) {
      this.drugService.deleteDrug(this.targetItem.id).subscribe((p: any) => {
        if (p) {
          this.visible = false;
          this.getDrugsByUser();
          this.commonService.updateToastData(
            `Success deleting drug "${this.targetItem.code} - ${this.targetItem.name}"`,
            'success',
            'Drug deleted.'
          );
        }
      });
    }
  }
}
