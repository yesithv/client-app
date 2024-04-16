import { Injectable } from '@angular/core';
import { SCHOOL_LIST } from './school.json';
import { School } from './school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }

  public getSchools(): School[] {
    return SCHOOL_LIST;
  }
}
