import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product}  from '../models/product';
import { ListResponseModule } from '../models/listResponseModule';
import { Category } from '../models/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl='https://localhost:44363/api/categories/getall';
  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<ListResponseModule<Category>>{
    return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl)  
    }
  } 
