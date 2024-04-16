import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title: string = 'client-app';
  active: boolean = true;
  teacher: string = 'Yesith Valencia';
}
