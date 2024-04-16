import { Injectable } from '@angular/core';
import { Client } from './client';
import { CLIENT_LIST } from './client.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  /*
  Se debe cambiar y poner de forma reactiva: 
  public getAllClients(): Client[] {
    return CLIENT_LIST;
  }
  */

  public getAllClients(): Observable<Client[]> {
    return of(CLIENT_LIST);
  }
}
