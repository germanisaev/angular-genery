import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsActiveComponent } from './components/products-active/products-active.component';
import { ProductsNoactiveComponent } from './components/products-noactive/products-noactive.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProductService } from './_services/product.service';
import { TableComponent } from './components/table/table.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

import { FilterPipe, JsonFilterByPipe } from './_pipes';
import { SortByPipe } from './_pipes';

@NgModule({
  declarations: [
    AppComponent,
    ProductsActiveComponent,
    ProductsNoactiveComponent,
    LayoutComponent,
    TableComponent,
    ProductEditComponent,
    FilterPipe,
    JsonFilterByPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
