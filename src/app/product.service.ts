import { Injectable } from '@angular/core';
import { Product } from './models/product'; 


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
    id: 1,
    name: 'Laptop',
    description: 'High performance laptop',
    price: 999,
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
  },
    {
    id: 2,
    name: 'Smart Watch',
    price: 149.99,
    description: 'Track your fitness and stay connected with this smart watch.',
    imageUrl: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
  
  ];

  constructor() {}

  // Get all products
  getProducts(): Product[] {
    return this.products;
  }

  // Get product by id
  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  // Add new product (admin only)
  addProduct(product: Product) {
    this.products.push(product);
  }

  // Delete product (admin only)
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  // Simple admin login check (simulate with localStorage)
  loginAdmin(username: string, password: string): boolean {
    // Simple hardcoded check
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      return true;
    }
    return false;
  }

  // Check if admin is logged in
  isAdminLoggedIn(): boolean {
    return localStorage.getItem('adminLoggedIn') === 'true';
  }

  // Logout admin
  logoutAdmin() {
    localStorage.removeItem('adminLoggedIn');
  }
}
