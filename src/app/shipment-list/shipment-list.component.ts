import { Component } from '@angular/core';

import { shipments } from '../data/shipments';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.css']
})

export class ShipmentListComponent {
  shipments = shipments;

  share() {
    window.alert('Dialog to share the information.');
  }

  edit() {
    window.alert('Form to edit the invoice.');
  }

  sendMailAlert() {
    window.alert('Mail alter sent.');
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/