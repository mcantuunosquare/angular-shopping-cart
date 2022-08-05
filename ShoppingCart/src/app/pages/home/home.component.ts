import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../../interfaces/iproduct';
import { ProductsServices } from '../../services/products-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    if (localStorage.getItem("products") == null) this.loadProducts();
    
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  loadProducts() {
    let products: IProduct[] = [];
    this.subscriptions.push(this.productService.getProductsFromAPI().subscribe(
      next => { products = next },
      error => { console.log(error) },
      () => {
        if (localStorage.getItem("products") == null) localStorage.setItem('products', JSON.stringify(products));
      }
    ));
  }

  constructor(public productService: ProductsServices) { }

}
