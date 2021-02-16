import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL = 'http:/localhost:8082/api/products/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable < Product[] > {
  return this.httpClient.get< Product[] >(this.productURL + `list`);
  }

  public listAll(): Observable < Product[] > {
  return this.httpClient.get< Product[] >(this.productURL + `/admin/all`);
  }

  public listByCategory(id: number, category: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productURL + `/{$category}/{$id}`);
  }

  public details(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.productURL + `detail/{$id}`);
  }

  public detailsByName(name: string): Observable<Product>{
    return this.httpClient.get<Product>(this.productURL + `detail/{$name}`);
  }

  public save(product: Product): Observable<any>{
    return this.httpClient.post<any>(this.productURL + `admin/create`, product);
  }

  public update(id: number, product: Product): Observable<any>{
    return this.httpClient.put<any>(this.productURL + `admin/update/{$id}`, product);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productURL + `admin/delete/{$id}`);
  }

  public detailName(name: string): Observable<Product>{
    return this.httpClient.get<Product>(this.productURL + `detail/{$name}`);
  }
}
