import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { CartItems } from '../models/cartitems';
import { CartItem } from '../models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product:Product){
    let item = CartItems.find(c=>product.productId===product.productId);
    if(item){
      item.quantity +=1;
    }else{
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity =1;
      CartItems.push();
    }
  }

  list():CartItem[]{
    return CartItems;
  }
}
