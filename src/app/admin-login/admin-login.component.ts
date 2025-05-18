import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private productService: ProductService, private router: Router) {}

  login() {
    const success = this.productService.loginAdmin(this.username, this.password);
    if (success) {
      this.errorMsg = '';
      alert('Login Successful!');
      this.router.navigate(['/admin']);
    } else {
      this.errorMsg = 'Invalid username or password';
    }
  }
}
