import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = environment.webApi;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getProductsActive(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`).pipe(
      map((data: any) => data.filter(item => { return item.isActive == true; }))
    );
  }

  getProductsNoActive(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/products`).pipe(
      map((data: any) => data.filter(item => { return item.isActive == false; }))
    );
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/products/${id}`);
  }

  updateProduct(id: any, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/products/${id}`, JSON.stringify(product), this.httpOptions)
    .pipe(
      tap(() => {
        this.refreshNeeded$.next();
      }),
      catchError(this.handleError));
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.BASE_URL}/products/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post(`${this.BASE_URL}/products`, JSON.stringify(product), this.httpOptions)
    .pipe(
      tap(() => {
        this.refreshNeeded$.next();
      }),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
}
}
