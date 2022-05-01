import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant';
import { PlantsService } from '../../services/plants.service';

@Component({
  selector: 'app-plants-list',
  templateUrl: './plants-list.component.html',
  styleUrls: ['./plants-list.component.css']
})
export class PlantsListComponent implements OnInit {
  plants!: Plant[];

  constructor(private _plantsService: PlantsService) { }

  ngOnInit(): void {
    this.getAllPlants();
  }

  getAllPlants() {
    this._plantsService.getAllPlants().subscribe({
      next: (res) => this.plants = res,
      error: (err) => console.error(err)
    })
  }

}
