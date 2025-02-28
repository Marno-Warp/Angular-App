import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  private vehicles: Vehicle[] = [
    { id: 1, price: 300000, make: 'Suzuki', model: 'Swift', body: 'Hatchback', imageUrl: 'assets/images/suzuki_swift.png' },
    { id: 2, price: 550000, make: 'Ford', model: 'Figo', body: 'Sedan', imageUrl: 'assets/images/ford_figo.webp' },
    { id: 3, price: 1100000, make: 'Toyota', model: 'Fortuner', body: 'SUV', imageUrl: 'assets/images/toyota_fortuner.avif' },
    { id: 4, price: 3250000, make: 'BMW', model: 'M8', body: 'Sedan', imageUrl: 'assets/images/bmw-m8.webp' },
    { id: 5, price: 499000, make: 'Mazda', model: 'CX-50', body: 'SUV', imageUrl: 'assets/images/mazda-cx50.png' },
    { id: 6, price: 269000, make: 'Hyundai', model: 'Grand i10', body: 'Hatchback', imageUrl: 'assets/images/hyundai-grand-i10.webp' },
  ];

  vehicles$ = of(this.vehicles);

  getVehicles(): Observable<Vehicle[]> {
    return this.vehicles$;
  }
}
