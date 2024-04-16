import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  public developBy: string = 'IronCoding';
  public autor: any = { firstName: 'Yesith', lastName: 'Valencia' };
}
