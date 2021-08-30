import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public products$: Observable<Product[]>;
  searchText: string = '';
  sortText: string = '';
  closeResult: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
