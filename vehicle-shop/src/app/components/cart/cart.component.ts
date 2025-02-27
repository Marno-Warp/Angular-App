import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart$;

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  removeFromCart(vehicleId: number) {
    this.cartService.removeFromCart(vehicleId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
