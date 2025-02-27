import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Vehicle[] = [];
  private cartSubject = new BehaviorSubject<Vehicle[]>([]);

  cart$ = this.cartSubject.asObservable();

  addToCart(vehicle: Vehicle) {
    if (!this.cart.find(v => v.id === vehicle.id)) {
      this.cart.push(vehicle);
      this.cartSubject.next([...this.cart]);
    }
  }

  removeFromCart(vehicleId: number) {
    this.cart = this.cart.filter(v => v.id !== vehicleId);
    this.cartSubject.next([...this.cart]);
  }

  clearCart() {
    this.cart = [];
    this.cartSubject.next([]);
  }
}
