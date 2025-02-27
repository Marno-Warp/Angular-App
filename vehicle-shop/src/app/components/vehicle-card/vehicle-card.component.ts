import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule} from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.scss'],
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class VehicleCardComponent {
  @Input() vehicle!: Vehicle;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.vehicle);
  }
}
