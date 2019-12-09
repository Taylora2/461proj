import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category.service';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

import { Router, ActivatedRoute } from '@angular/router';

import {AppModule } from '../app.module'

import { BehaviorSubject } from 'rxjs'
import {databaseService} from "@/database.service"
import {CategoriesTTable} from "@/database.service"

@Component({
  selector: 'app-category-list',
  templateUrl: 'category-list.component.html'
})
export class CategoryListComponent implements OnInit {

  currentUser: User;
  catagoryList:Array<string>;
  service: CategoryListService;
  selectedCategory:string;

  message:string;

  constructor(service: CategoryListService,private authenticationService: AuthenticationService,
    
    private userService: UserService, private router:Router, private dbservice: databaseService) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.catagoryList = service.categoriesArray;
    this.service = service;
    
  }



  ngOnInit() {
    this.currentUser
    //this.service.selectedCategory.subscribe(selectedCategory =>this.selectedCategory = selectedCategory);
    this.service.currentMessage.subscribe(message => this.message = message)

    ////comment this out to show it connects
    this.getAllCategoriesTable();
  }

  ////comment this out to show it connects
  getAllCategoriesTable(){
    const catObservable = this.dbservice.getAllCategoriesTable();
    catObservable.subscribe((catData: any[])=>{
        this.catagoryList = catData;
        console.log(this.catagoryList);
    })
  }


  newMessage(selected:string) {
    this.service.changeMessage(selected);
  }

}
