import { Component, OnInit } from '@angular/core';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    VehicleListComponent,
    CartComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vehicle-shop';
  
  isCartOpen = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.isCartOpen = cart.length > 0;
    });
  }

  toggleCart(): void {
    this.isCartOpen = !this.isCartOpen;
  }
}