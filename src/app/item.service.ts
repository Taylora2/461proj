import { Injectable } from '@angular/core';
import { CategoryListService } from '@/category.service';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  items:Array<Array<string>>;

  category:string;

  selectedItem:Array<any>;

  constructor() {
    this.items = [["1", "Banana", "10"],["4", "Tomatoe", "400"],["7", "Chicken", "1"],["12", "Ice Cream", "5"]]; // the pretend database
    this.selectedItem = this.items[0]; // figure out how to make this change with the setter method!
  }

  getItem(id:string, fields:Array<any> = []) {
    // SELECT FROM items WHERE id = "id" or something like that

    if (fields === []) {
      // return item with primary key id with all fields
    }
    else {
      // return item with primary key id with specified fields
    }

    // Dummy code that simulates connecting to database from component's point of view
    let foundItem:Array<string> = [];

    this.items.forEach(function (item) {
      if (item[0] === id) {
        foundItem = item;
      }
    })
    return foundItem; // throw some error if item isn't found
  }

  getItems(category:string) {
    
    if (category === "Food")
      return [["1", "Banana", "10"],["4", "Tomatoe", "400"],["7", "Chicken", "1"],["12", "Ice Cream", "5"]];

    if (category === "Kitchen")
      return [["1", "table", "10"],["4", "knife", "400"],["7", "somthing", "1"],["12", "somthing else", "5"]];

    if (category === "Home")
      return [["1", "chair", "10"],["4", "nails", "400"],["7", "door", "1"],["12", "idk", "5"]];
    
    if (category === "Bathroom")
      return [["1", "toilet", "10"],["4", "plunger", "400"],["7", "hand soap", "1"],["12", "somthing else", "5"]];

    if (category === "Supplies")
      return [["1", "Papaer towels", "10"],["4", "matches", "400"],["7", "spoons", "1"],["12", "forks", "5"]];


    return [[]];//if not food then empty because we dont have anythign else set up yet
  }


}
