import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Lazy Load
const routes: Routes = [
  { path: 'plants', loadChildren: () => import('./plants/plants.module').then(m => m.PlantsModule) },
  { path: '**', redirectTo: 'plants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
