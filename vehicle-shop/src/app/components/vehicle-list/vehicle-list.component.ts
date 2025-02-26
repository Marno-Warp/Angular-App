import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { Observable } from 'rxjs';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
  standalone: true,
  imports: [CommonModule, VehicleCardComponent]
})
export class VehicleListComponent implements OnInit {
  vehicles$!: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    this.vehicles$ = this.vehicleService.getVehicles();
  }
}
