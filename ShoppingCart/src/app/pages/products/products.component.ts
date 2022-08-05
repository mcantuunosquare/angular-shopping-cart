import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, reduce, Subscription, switchMap } from 'rxjs';
import { ICategory } from '../../interfaces/icategory';
import { IProduct } from '../../interfaces/iproduct';
import { ProductsServices } from '../../services/products-services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  listProducts: IProduct[] = [];
  listCategories: {categoryName:string,total:number}[] = [];
  subscriptions: Subscription[] = [];
  categorySelectedItem: string = "";

  constructor(
    private productService: ProductsServices,
    private router: ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
   }

  ngOnInit(): void {

    this.loadProducts();
    this.loadCategories();

    this.applyFilters();
  }

  loadProducts() {
    this.subscriptions.push(this.productService.getProducts().subscribe(
      next => this.listProducts = next
    ));
  }

  loadCategories() {
    this.subscriptions.push(this.productService.getCatetories().subscribe(
      next => {
        
        next.forEach((category,index) => {
          let itemfound = this.listCategories.find(item => item.categoryName == category.name);
          if (!itemfound) {
            this.listCategories.push({ categoryName: category.name, total: 1 })
          } else {
            this.listCategories[this.listCategories.findIndex(item => item.categoryName == itemfound?.categoryName)].total++;
          }
        })
      },
      Error => { console.log(Error) },
      () => {
        console.log(this.listCategories);
      }
    ));
  }

  selectCategory(categoryName: string) {
    this.categorySelectedItem = categoryName;
    this.subscriptions.push(this.productService.getProducts().pipe(
      map(resp => resp.filter(item => (item.category.find(cat => cat.name == categoryName) ? true : false)))
    ).subscribe(
      next => this.listProducts = next
    ));
  }

  applyFilters() {
    if (this.router.snapshot.queryParamMap.get('category')) {
      this.subscriptions.push(
        this.router.queryParams.pipe(
          switchMap(params => {
            this.categorySelectedItem = params['category']
            return this.productService.getProducts().pipe(map(resp => resp.filter(item => (item.category.find(cat => cat.name == params['category']) ? true : false))))
          })
        ).subscribe(
          next => this.listProducts = next
        )
      );

    }
  }

}
