import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = environment.apiURL;
  jsonHeader = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  add(data: any) {
    return this.http.post(`${this.url}/products`, data, this.jsonHeader);
  }

  update(data: any) {
    return this.http.put(`${this.url}/products`, data, this.jsonHeader);
  }

  getProducts() {
    return this.http.get(`${this.url}/products`);
  }

  updateStatus(data: any) {
    return this.http.put(
      `${this.url}/products/updateStatus`,
      data,
      this.jsonHeader
    );
  }

  delete(id: any) {
    return this.http.delete(
      `${this.url}/products/${id}`,
      this.jsonHeader
    );
  }

  getProductsByCategory(id: any) {
    return this.http.get(`${this.url}/product/getByCategoryID/${id}`);
  }

  getById(id: any) {
    return this.http.get(`${this.url}/product/getByID/${id}`);
  }
}
