import { Component, OnInit } from '@angular/core';
import { CategoryListService } from '../category.service';
import { first } from 'rxjs/operators';
import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';

import { Router, ActivatedRoute } from '@angular/router';

import {AppModule } from '../app.module'


import { BehaviorSubject } from 'rxjs'

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
    
    private userService: UserService, private router:Router) {
    this.currentUser = this.authenticationService.currentUserValue;
    this.catagoryList = service.categoriesArray;
    this.service = service;

  }
  ngOnInit() {
    this.currentUser
    //this.service.selectedCategory.subscribe(selectedCategory =>this.selectedCategory = selectedCategory);
    this.service.currentMessage.subscribe(message => this.message = message)
  }

  newMessage(selected:string) {
    this.service.changeMessage(selected);
  }

}
