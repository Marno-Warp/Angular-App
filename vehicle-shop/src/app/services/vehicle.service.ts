import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class VehicleService {
  private firestore: Firestore = inject(Firestore);

  getVehicles(): Observable<Vehicle[]> {
    const vehiclesCollection = collection(this.firestore, 'vehicles');
    return collectionData(vehiclesCollection, { idField: 'id' }) as Observable<Vehicle[]>;
  }
}
