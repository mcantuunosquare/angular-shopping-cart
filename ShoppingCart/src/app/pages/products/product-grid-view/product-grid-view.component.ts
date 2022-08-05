import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from '../../../interfaces/icategory';
import { IProduct } from '../../../interfaces/iproduct';

@Component({
  selector: 'app-product-grid-view',
  templateUrl: './product-grid-view.component.html',
  styleUrls: ['./product-grid-view.component.css']
})
export class ProductGridViewComponent implements OnInit {

  @Input() product: IProduct = { id: 0, category: [{name:"category"}], code: "none", currency: "MXN", price: 0, productName: "", uid: "", images: [{ url: "" }] };
  @Output() categorySelected: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewDetail(uid: string) {
    this.router.navigate(["/products/" + uid])
  }

  handlerChipClick(category: ICategory) {
    this.categorySelected.emit(category.name);
  }

}
