import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsActiveComponent } from './products-active.component';

describe('ProductsActiveComponent', () => {
  let component: ProductsActiveComponent;
  let fixture: ComponentFixture<ProductsActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
