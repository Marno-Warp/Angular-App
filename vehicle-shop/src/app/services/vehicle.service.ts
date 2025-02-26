import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  private vehicles: Vehicle[] = [
    { price: 300000, make: 'Suzuki', model: 'Swift', body: 'Sedan', imageUrl: 'assets/images/suzuki_swift.png' },
    { price: 550000, make: 'Ford', model: 'Figo', body: 'Hatchback', imageUrl: 'assets/images/ford_figo.webp' },
    { price: 1000000, make: 'Toyota', model: 'Fortuner', body: 'SUV', imageUrl: 'assets/images/toyota_fortuner.avif' }
  ];

  vehicles$ = of(this.vehicles);

  getVehicles(): Observable<Vehicle[]> {
    return this.vehicles$;
  }
}
