import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl:string=environment.apiUrl
  constructor(private httpClient:HttpClient) { }
  
 
 
  getAllProducts():Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/products`)
  }
  getProductByCategory(categoryName:any):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/products/category/${categoryName}`)
  }
}
