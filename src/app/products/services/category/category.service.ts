import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl:string=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }



  getAllCategory():Observable<any>{
   return this.httpClient.get(`${this.baseUrl}/products/categories`)
  }
}
