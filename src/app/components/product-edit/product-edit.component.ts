import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@app/_models';
import { ProductService } from '@app/_services';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product>;
  productForm: FormGroup;
  submitted = false;
  product: Product;
  productId: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        let id = params.get('id');
        this.productId = +id;
        return this.productService.getProductById(+id).pipe(
          tap(product => this.productForm.patchValue(product)));
      })
    );
  }

  createForm() {
    this.productForm = this.fb.group({
      CatalogId: ['', Validators.required],
      Name: ['', Validators.required],
      Amount: [0, Validators.required],
      Price: [0, Validators.required],
      isActive: [false, Validators.required],
    });
  }

  get f() { return this.productForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    console.log(this.productForm.value);
    console.log(this.productId);

    this.productService.updateProduct(this.productId, this.productForm.value);

    //this.router.navigateByUrl(['/']);
    this.router.navigate(['']);
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.productForm.reset();
  }
  
}
