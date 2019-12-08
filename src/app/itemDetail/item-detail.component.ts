import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item.service';
import { ShoppingCartService } from '@/shoppingcart.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {

  item:Array<any>;

  constructor(serviceItem: ItemListService) {
    this.item = serviceItem.selectedItem; // Gets item primary key to determine what item to display
  }

  addToCart(serviceCart: ShoppingCartService) {
    serviceCart.addToCart(this.item);
  }
}
