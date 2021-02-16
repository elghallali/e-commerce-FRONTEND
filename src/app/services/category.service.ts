import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryURL = 'http:/localhost:8082/api/categories/admin/';
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.categoryURL + `all`);
  }
  public save(category: Category): Observable<any>{
    return this.httpClient.post<any>(this.categoryURL + `create`, category);
  }
  public update(id: number, category: Category): Observable<any>{
    return this.httpClient.put<any>(this.categoryURL + `update/{$id}`, category);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.categoryURL + `delete/{$id}`);
  }
}
