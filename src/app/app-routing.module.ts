import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component'; 
import { RegistrationComponent } from './home/registration/registration.component'; 
import { DestinationComponent } from './destination/destination.component';
import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }, // The LoginComponent will be shown when navigating to /login
  { path: 'registration', component: RegistrationComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'flight', component: FlightComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
  // other routes can be added here
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
