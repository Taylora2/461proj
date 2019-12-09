
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';


export interface CategoriesTTable{
    cat_name:string;
}

@Injectable({
    providedIn: 'root'
  })
export class databaseService{
  
    constructor(private http: HttpClient, ) { }
    url = 'http://localhost:8000';

  getAllCategoriesTable(): Observable<CategoriesTTable[]> {
        return this.http.get<CategoriesTTable[]>(`${this.url}/categories`);
  }


}