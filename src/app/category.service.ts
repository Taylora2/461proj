import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import {CategoriesTTable} from "@/database.service"
import {Router} from "@angular/router";

import {databaseService} from "@/database.service"




@Injectable({
  providedIn: 'root'
})
export class CategoryListService {

  public categoriesArray:Array<string>;

  public selectedCategory;


  private messageSource = new BehaviorSubject<string>("EmptyNow");
  currentMessage = this.messageSource.asObservable();


  //interface
  public categoriesTable

  constructor(private db:databaseService) {

    this.categoriesArray=["Food", "Kitchen", "Home", "Bathroom", "Supplies"]; // the pretend database

  }






  public setSelectedCategory(cat:string){
    this.messageSource.next(cat);
  }

  public getSelectedCategory(){
    return this.selectedCategory;
  }

  changeMessage(message: string){
    this.messageSource.next(message);
  }


}
