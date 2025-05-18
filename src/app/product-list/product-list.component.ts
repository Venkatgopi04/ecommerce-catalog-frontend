import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct?: Product;
  showDetails: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // When user clicks on a product card
  viewDetails(product: Product) {
    this.selectedProduct = product;
    this.showDetails = true;
  }

  // Close details view
  closeDetails() {
    this.showDetails = false;
  }
}
