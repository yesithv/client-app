import { Component, OnInit } from '@angular/core';
import { School } from './school';
import { SchoolService } from './school.service';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html'
})
export class SchoolsComponent  {

  public schoolList: School[];

  constructor(private schoolService: SchoolService) {
    this.schoolList = this.schoolService.getSchools();
  }

  

}
