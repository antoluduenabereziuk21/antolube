import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';






@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
   
  ],
  exports:[
    FooterComponent,
    NavbarComponent
  ],
  providers:[
    //ToDO:JWT
    //ToDo:Interceptor
  ],
})
export class SharedModule { }
