import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsListComponent } from './components/plants-list/plants-list.component';
import { PlantsComponent } from './pages/plants/plants.component';


@NgModule({
  declarations: [
    PlantsListComponent,
    PlantsComponent
  ],
  imports: [
    CommonModule,
    PlantsRoutingModule
  ]
})
export class PlantsModule { }
