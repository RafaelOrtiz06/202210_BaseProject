import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Plant } from '../../models/plant';
import { PlantsService } from '../../services/plants.service';

import { PlantsListComponent } from './plants-list.component';
import { faker } from '@faker-js/faker';
import { PlantsTypesEnum } from '../../enums/plants-types-enum';


describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;
  let debug!: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantsListComponent],
      providers: [PlantsService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListComponent);
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
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have plants size th elements', () => {
    const trSize = fixture.debugElement.queryAll(By.css('tr')).length;

    //Add 1 for the tr of the thead
    expect(trSize).toEqual(component.plants.length + 1);
  });

});
