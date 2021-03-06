import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-popular-product-list',
  templateUrl: './popular-product-list.component.html',
  styleUrls: ['./popular-product-list.component.css']
})
export class PopularProductListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}

