import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsNoactiveComponent } from './products-noactive.component';

describe('ProductsNoactiveComponent', () => {
  let component: ProductsNoactiveComponent;
  let fixture: ComponentFixture<ProductsNoactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsNoactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsNoactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
