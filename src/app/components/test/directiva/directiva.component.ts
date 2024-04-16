import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  public courseList: string[] = ['TypeScript', 'JavaScript', 'Java EE', 'PhP'];
  public showList: boolean = true;
  public buttonText: string = 'Ocultar';

  constructor() {

  }

  public validateShowList(): void {
    this.showList = this.showList ? false : true;
    this.buttonText = this.showList ? 'Ocultar' : 'Mostar'
  }


}
