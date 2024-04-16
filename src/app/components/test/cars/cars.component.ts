import { Component } from '@angular/core';
import { Car } from './car';
import { CAR_LIST } from './cars.json';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html'
})
export class CarsComponent {

  /*carList: Car[] = [
    { id: 1, model: 'Journey', year: 2017, automatic: true },
    { id: 2, model: 'Subaru', year: 2022, automatic: false },
    { id: 3, model: 'Sonic', year: 2025, automatic: true },
    { id: 4, model: 'Tracker', year: 2015, automatic: false }
  ];*/

  public carList: Car[];

  constructor() {
    this.carList = CAR_LIST;
  }

}
