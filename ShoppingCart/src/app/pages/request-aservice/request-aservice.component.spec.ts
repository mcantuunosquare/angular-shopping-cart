import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAServiceComponent } from './request-aservice.component';

describe('RequestAServiceComponent', () => {
  let component: RequestAServiceComponent;
  let fixture: ComponentFixture<RequestAServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
