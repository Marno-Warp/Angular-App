import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { map } from 'rxjs/operators';
import { VehicleFiltersComponent } from '../vehicle-filters/vehicle-filters.component';


@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
  standalone: true,
  imports: [CommonModule, VehicleCardComponent, VehicleFiltersComponent],
})
export class VehicleListComponent implements OnInit {
  vehicles$!: Observable<Vehicle[]>;
  
  private filterSubject = new BehaviorSubject<any>({
    manufacturer: 'Any',
    bodyStyle: 'Any',
    minPrice: 0,
    maxPrice: 10000000
  });

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    let allVehicles$ = this.vehicleService.getVehicles();

    this.vehicles$ = combineLatest([allVehicles$, this.filterSubject]).pipe(
      map(([vehicles, filter]) => vehicles.filter(vehicle => 
           (filter.manufacturer === 'Any' || vehicle.make === filter.manufacturer) 
        && (filter.bodyStyle === 'Any' || vehicle.body === filter.bodyStyle) 
        && vehicle.price >= filter.minPrice && vehicle.price <= filter.maxPrice
      ))
    );
  }

  onFilterChange(filter: any) {
    this.filterSubject.next(filter);
  }
}
