import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavigatorComponent } from './categories-navigator.component';

describe('CategoriesNavigatorComponent', () => {
  let component: CategoriesNavigatorComponent;
  let fixture: ComponentFixture<CategoriesNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
