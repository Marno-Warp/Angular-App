import { Component } from '@angular/core';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehicleListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
