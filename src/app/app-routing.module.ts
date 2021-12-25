import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { OutstationComponent } from './outstation/outstation.component';
import { CabCorporatecabComponent } from './cab-corporatecab/cab-corporatecab.component';
import { RentalcabComponent } from './rentalcab/rentalcab.component';
import { DrivewithusComponent } from './drivewithus/drivewithus.component';
const routes: Routes = [{path:'',component:HomeComponent,pathMatch:"full"},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',

},
{path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
{path:'login',component:LoginComponent},
{path:'booking',component:BookingComponent},
{path:'outstation',component:OutstationComponent},
{path:'cabCorporatecab',component:CabCorporatecabComponent},
{path:'Drivewithus',component:DrivewithusComponent},
{path:'rentalcab',component:RentalcabComponent},
{
  path: '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
