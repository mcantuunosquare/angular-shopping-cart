import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter, Subscription, switchMap } from 'rxjs';
import { IProduct } from '../../../interfaces/iproduct';
import { ProductsServices } from '../../../services/products-services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  subscribers: Subscription[] = [];
  @Input() product: IProduct = { id: 0, category: [{ name: "category" }], code: "none", currency: "MXN", price: 0, productName: "", uid: "", images: [{ url: "" }] };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductsServices
  ) { }

  ngOnInit(): void {

    this.loadProduct();

  }


  goBack() {
    this.router.navigate(["/products"]);
  }

  loadProduct() {
    this.subscribers.push(
      this.route.params.pipe(
        switchMap(args => {
          return this.productService.getProductByUid(args['id']);
        })
      ).subscribe(
        next => this.product = next
      )
    );
  }


}
