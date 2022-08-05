import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { IProduct } from '../interfaces/iproduct';

import { ProductsServices } from './products-services.service';

describe('ProductsServicesService', () => {
  let service: ProductsServices;
  let subsribers :Subscription[] = [];

  beforeAll(() => {
   
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ProductsServices);

  });

  afterAll(() => {
    localStorage.removeItem("products");
    subsribers.forEach(item => item.unsubscribe());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products from API', (done: DoneFn) => {
    let products: IProduct[] = [];
    subsribers.push(service.getProductsFromAPI().subscribe(
      next => next.forEach(item=> products.push(item)),
      error => {
        console.log(error);
      },
      () => {
        expect(products.length).toBeGreaterThan(1);
        done();
      }
    ));
  });

  it('should get products from localstorate', (done: DoneFn) => {

    let productsTosave: IProduct[] = [];
    subsribers.push(service.getProductsFromAPI().subscribe(
      next => { productsTosave = next },
      error => { console.log(error) },
      () => {
        if (localStorage.getItem("products") == null) localStorage.setItem('products', JSON.stringify(productsTosave));
        let products: IProduct[] = []
        subsribers.push(service.getProducts().subscribe(
          next => products = next,
          error => console.log(error),
          () => {
            expect(products.length).toBeGreaterThan(1);
            done();
          }
        ));
      }
    ));


    
  });

});


