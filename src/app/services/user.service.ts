import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  url = environment.apiURL;
  jsonHeader = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };

  constructor(private http: HttpClient) {}

  signup(data: any) {
    return this.http.post(`${this.url}/users`, data, this.jsonHeader);
  }

  forgotPassword(data: any) {
    return this.http.post(
      `${this.url}/user/forgotPassword`,
      data,
      this.jsonHeader
    );
  }

  login(data: any) {
   
    return this.http.post(`${this.url}/users/login`, data, this.jsonHeader);
  }

  checkToken() {
    return this.http.get(`${this.url}/checkToken`);
  }

  changePassword(data: any) {
    return this.http.post(
      `${this.url}/user/changePassword`,
      data,
      this.jsonHeader
    );
  }

  getUsers() {
    return this.http.get(`${this.url}/users`);
  }

  update(data: any) {
    return this.http.patch(`${this.url}/user/update`, data, this.jsonHeader);
  }

  updateStatus(data: any) {
    return this.http.put(`${this.url}/users/updateStatus`, data, this.jsonHeader);
  }
}
