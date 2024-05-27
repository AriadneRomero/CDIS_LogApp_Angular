import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts: Product[] = [
    { id:1, name: 'Coca Cola', description: 'Bebida con azucar', price: 50, stock: 200 },
    { id:2, name: 'Corona', description: 'Bebida con alcohol', price: 5, stock: 300 },
  ]

  constructor() {}

  ngOnInit(): void {

  }
}
