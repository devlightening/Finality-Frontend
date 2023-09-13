import { Component } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {

  cartItems:CartItem[];
  
}
