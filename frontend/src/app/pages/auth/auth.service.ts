import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/model';
import { environment } from 'src/environment/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }
  isAdmin() {
    const user = JSON.parse(localStorage.getItem('user')!);
    const admin = user.user.isAdmin;
    return admin;
  }
  login(form: User) {
    return this.http
      .post<User>(`${environment.endPoint}/auth/api/signin`, form)
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        })
      );
  }
  register(form: User) {
    return this.http.post<User>(
      `${environment.endPoint}/auth/api/signup`,
      form
    );
  }
  loadUser() {
    return JSON.parse(localStorage.getItem('user')!);
  }
  logout() {
    localStorage.clear();
  }
}
