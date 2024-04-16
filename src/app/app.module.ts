import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivaComponent } from './components/test/directiva/directiva.component';
import { CarsComponent } from './components/test/cars/cars.component';
import { SchoolsComponent } from './components/test/schools/schools.component';
import { ClientComponent } from './components/client/client.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'clientes', component: ClientComponent },
  { path: 'carros', component: CarsComponent },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'colegios', component: SchoolsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DirectivaComponent,
    CarsComponent,
    SchoolsComponent,
    ClientComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
