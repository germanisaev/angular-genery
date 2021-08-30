import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-products-noactive',
  templateUrl: './products-noactive.component.html',
  styleUrls: ['./products-noactive.component.scss']
})
export class ProductsNoactiveComponent implements OnInit {

  products$: Observable<Product[]> = this._service.getProductsNoActive();
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
  }

}
