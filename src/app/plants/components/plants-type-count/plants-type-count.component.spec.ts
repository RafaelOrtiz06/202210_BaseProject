import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantsTypesEnum } from '../../enums/plants-types-enum';
import { Plant } from '../../models/plant';

import { PlantsTypeCountComponent } from './plants-type-count.component';
import { faker } from '@faker-js/faker';


describe('PlantsTypeCountComponent', () => {
  let component: PlantsTypeCountComponent;
  let fixture: ComponentFixture<PlantsTypeCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsTypeCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsTypeCountComponent);
    component = fixture.componentInstance;
    let plants = [];

    for (const x of [1, 2, 3]) {
      const plant = new Plant(
        faker.datatype.number(x),
        faker.datatype.string(10), 
        faker.datatype.string(10), 
        PlantsTypesEnum.EXTERIOR, 
        faker.datatype.number(10), 
        faker.datatype.string(10), 
        faker.datatype.string(10)
      );
      plants.push(plant);
    }

    component.plants = plants;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
