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

 
  
  updateStatus(data: any) {
    return this.http.put(`${this.url}/orders/updateOrderStatus`, data, this.jsonHeader);
  }

  getOrders() {
    return this.http.get(`${this.url}/orders`, this.jsonHeader);
  }

  getOrdersById(id:any) {
    return this.http.get(`${this.url}/orders/ordersByUserId?id=${id}`, this.jsonHeader);
  }


  placeOrder(data:any){
    return this.http.post(`${this.url}/orders`, data, this.jsonHeader);

  }

 

}
