import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { PlantsTypeCountComponent } from './components/plants-type-count/plants-type-count.component';


@NgModule({
  declarations: [
    PlantsListComponent,
    PlantsComponent,
    PlantsTypeCountComponent
  ],
  imports: [
    CommonModule,
    PlantsRoutingModule
  ]
})
export class PlantsModule { }
