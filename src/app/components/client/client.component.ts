import { Component } from '@angular/core';
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {

  public clientList: Client[] = [new Client];

  constructor(private clientService: ClientService) {
    // Hay que ponerlo reactivo:
    // this.clientList = clientService.getAllClients();

    clientService.getAllClients().subscribe(
      (clients) => this.clientList = clients
    );
  }

}
