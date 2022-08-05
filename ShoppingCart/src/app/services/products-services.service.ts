import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { flatMap, map, Observable, reduce } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';
import 'rxjs/operators';
import { ICategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsServices {

  private host = environment.host;
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  getProductsFromAPI(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.host + "products.inv.json?key=" + this.apiKey);
  }

  getProducts(): Observable<IProduct[]> {
    return new Observable<IProduct[]>(subscriber => {
      let content = (localStorage.getItem("products")) ?? "[]";
      subscriber.next(JSON.parse(content));
      subscriber.complete();
    });
  }

  getProductByUid(uid: string): Observable<IProduct> {
    return this.getProducts().pipe(
      map(val => { return val.filter(item => item.uid==uid)[0] })
    );
  }

  getCatetories(): Observable<ICategory[]> {
    //return this.getProducts().pipe(
    //   map(values =>
    //    values.map<ICategory[]>(items => items.category)
    //  )
    //);
    return this.getProducts().pipe(
      map(items => items.flatMap(prod => prod.category.flatMap(cat => cat))
      )
    );
  }


}
