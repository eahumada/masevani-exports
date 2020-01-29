import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { MenuListComponent } from './menu-list/menu-list.component';

import { CustomsBrokerListComponent } from './customsbroker-list/customsbroker-list.component';
import { ShipmentListComponent } from './shipment-list/shipment-list.component';

import { LoginComponent } from './login';
// import { RegisterComponent } from './register';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'menu', component: MenuListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'customsbroker', component: CustomsBrokerListComponent },
      { path: 'shipments', component: ShipmentListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    MenuListComponent,

    CustomsBrokerListComponent,
    ShipmentListComponent,
    
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/