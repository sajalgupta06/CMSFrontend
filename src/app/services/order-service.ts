import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url: string = environment.apiURL;
  jsonHeader = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  add(data: any) {
    return this.http.post(`${this.url}/categories`, data, this.jsonHeader);
  }
  
  updateStatus(data: any) {
    return this.http.put(`${this.url}/orders/updateOrderStatus`, data, this.jsonHeader);
  }

  getOrders() {
    return this.http.get(`${this.url}/orders`, this.jsonHeader);
  }

 

}
