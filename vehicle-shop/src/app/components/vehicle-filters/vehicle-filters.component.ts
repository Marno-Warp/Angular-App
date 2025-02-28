import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-filters',
  templateUrl: './vehicle-filters.component.html',
  styleUrls: ['./vehicle-filters.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatSelectModule,
    FormsModule, CommonModule],
})
export class VehicleFiltersComponent {
  manufacturers: string[] = ['Any', 'Suzuki', 'Ford', 'Toyota', 'BMW', 'Mazda', 'Hyundai'];
  bodyStyles: string[] = ['Any', 'Sedan', 'SUV', 'Hatchback'];

  priceRanges = [
    { label: 'Any', min: 0, max: 10000000 },
    { label: 'Under R500,000', min: 0, max: 500000 },
    { label: 'R500,000 - R1,000,000', min: 500000, max: 1000000 },
    { label: 'Over R1,000,000', min: 1000000, max: 10000000 }
  ];

  selectedManufacturer = 'Any';
  selectedBodyStyle = 'Any';
  selectedPriceRange = this.priceRanges[0];

  @Output() filtersChanged = new EventEmitter<any>();

  applyFilters() {
    this.filtersChanged.emit({
      manufacturer: this.selectedManufacturer,
      bodyStyle: this.selectedBodyStyle,
      minPrice: this.selectedPriceRange.min,
      maxPrice: this.selectedPriceRange.max
    });
  }
}
