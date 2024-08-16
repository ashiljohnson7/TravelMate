import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { WhiteSectionComponent } from './home/white-section/white-section.component';
import { BlackSectionComponent } from './home/black-section/black-section.component';
import { HoverService } from './hover.service';
import { DestinationComponent } from './destination/destination.component';
import { FlightComponent } from './flight/flight.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    WhiteSectionComponent,
    BlackSectionComponent,
    DestinationComponent,
    FlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HoverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
