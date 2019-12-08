import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  theCart:Array<Array<string>>;

  constructor() {
    
  }

  addToCart(item:Array<string>){
    this.theCart.push(item);
  }

}
