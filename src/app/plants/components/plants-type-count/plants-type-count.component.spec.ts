import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsTypeCountComponent } from './plants-type-count.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
