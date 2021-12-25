import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { OutstationComponent } from './outstation/outstation.component';
import { RentalcabComponent } from './rentalcab/rentalcab.component';
import { CabCorporatecabComponent } from './cab-corporatecab/cab-corporatecab.component';
import { DrivewithusComponent } from './drivewithus/drivewithus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    OutstationComponent,
    RentalcabComponent,
    CabCorporatecabComponent,
    DrivewithusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
