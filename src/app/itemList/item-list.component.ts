
import { Component, OnInit } from '@angular/core';

import { ItemListService } from '../item.service';
import { CategoryListService } from '../category.service';
import {AppModule } from '../app.module';

import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})
export class ItemListComponent implements OnInit{

  selectedCategory:string;
  itemList:Array<Array<any>>;
  serviceCategory: CategoryListService;
  serviceItem: ItemListService;

  message:string;

  constructor(serviceItem: ItemListService, serviceCategory: CategoryListService ) {

    this.serviceItem = serviceItem;
    this.serviceCategory = serviceCategory
  }

  ngOnInit(){
    // this.serviceCategory.selectedCategory.subscribe(selectedCategory => this.selectedCategory = selectedCategory);
    // this.itemList = this.serviceItem.getItems(this.selectedCategory);

    this.serviceCategory.currentMessage.subscribe(message => this.message = message)
    this.itemList = this.serviceItem.getItems(this.message);


  }

  selectItem(item:Array<any>, serviceItem: ItemListService) {
    serviceItem.selectedItem = item; 
  }


}
