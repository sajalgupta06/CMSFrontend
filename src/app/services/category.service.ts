import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  url: string = environment.apiURL;
  jsonHeader = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  add(data: any) {
    return this.http.post(`${this.url}/categories`, data, this.jsonHeader);
  }

  update(data: any) {
    return this.http.put(`${this.url}/categories`, data, this.jsonHeader);
  }

  getCategories() {
    return this.http.get(`${this.url}/categories`);
  }

  getCategoriesById(id:any) {
    return this.http.get(`${this.url}/categories/?id=${id}`);
  }
  delete(id: any) {
    return this.http.delete(
      `${this.url}/categories/${id}`,
      this.jsonHeader
    );
  }

}
