import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  public categoriesArray:Array<string>;

  //private messageSource = new BehaviorSubject<string>("nothing_yet");

  //selectedCategory = this.messageSource.asObservable();

  //testing
  private messageSource = new BehaviorSubject<string>("EmptyNow");
  currentMessage = this.messageSource.asObservable();



  constructor() {
    this.categoriesArray = ["Food", "Kitchen", "Home", "Bathroom", "Supplies"]; // the pretend database

  }

  public setSelectedCategory(cat:string){
    this.messageSource.next(cat);
  }

  // public getSelectedCategory(){
  //   return this.selectedCategory;
  // }

  changeMessage(message: string){
    this.messageSource.next(message);
  }


}
