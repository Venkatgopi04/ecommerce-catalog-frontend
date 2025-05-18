import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };
  errorMsg = '';

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    if (!this.productService.isAdminLoggedIn()) {
      this.router.navigate(['/admin-login']);
    } else {
      this.products = this.productService.getProducts();
    }
  }

  addProduct() {
    if (!this.newProduct.name || !this.newProduct.price || !this.newProduct.imageUrl) {
      this.errorMsg = 'Please fill all required fields';
      return;
    }
    // Assign a new unique ID
    this.newProduct.id = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    this.productService.addProduct({...this.newProduct});
    this.products = this.productService.getProducts();
    this.newProduct = { id: 0, name: '', description: '', price: 0, imageUrl: '' };
    this.errorMsg = '';
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  logout() {
    this.productService.logoutAdmin();
    this.router.navigate(['/admin-login']);
  }
}
