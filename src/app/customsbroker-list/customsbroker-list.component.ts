import { Component } from '@angular/core';

import { customsBrokers } from '../data/customs-brokers';

@Component({
  selector: 'app-customsbroker-list',
  templateUrl: './customsbroker-list.component.html',
  styleUrls: ['./customsbroker-list.component.css']
})

export class CustomsBrokerListComponent {
  customsbrokers = customsBrokers;

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/