import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from '../cart/cart.component';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  totalPricetoPay:any;
  ngOnInit(): void {
    this.totalPricetoPay = localStorage.getItem('price')
  }

}
