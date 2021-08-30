import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-products-active',
  templateUrl: './products-active.component.html',
  styleUrls: ['./products-active.component.scss']
})
export class ProductsActiveComponent implements OnInit {

  products$: Observable<Product[]> = this._service.getProductsActive();
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
  }

}
