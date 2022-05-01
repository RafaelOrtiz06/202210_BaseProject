import { Component, Input, OnInit } from '@angular/core';
import { PlantsTypesEnum } from '../../enums/plants-types-enum';
import { Plant } from '../../models/plant';

@Component({
  selector: 'app-plants-type-count',
  templateUrl: './plants-type-count.component.html',
  styleUrls: ['./plants-type-count.component.css']
})
export class PlantsTypeCountComponent implements OnInit {
  @Input() plants!: Plant[];
  count!: { Interior: number, Exterior: number };

  ngOnInit(): void {
    this.countTypePlants();
  }

  countTypePlants(): void {
    const types: any = this.plants.map(plant => plant.tipo);

    const count: { Interior: number, Exterior: number } = types.reduce((accumulator: any, value: string) => {
      return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
    }, {});

    this.count = count;
  }

}
