import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;

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