import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http
      .get<any>(`${environment.endPoint}/users/api/getUsers`)
      .pipe(
        map((users) => {
          return users;
        })
      );
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(
      `${environment.endPoint}/users/api/deleteUser/${id}`
    );
  }
  getUser(id: number): Observable<number> {
    return this.http.get<number>(
      `${environment.endPoint}/users/api/getUserId/${id}`
    );
  }
  updateUser(data: any, id: number): Observable<any> {
    console.log(data);

    return this.http.put<any>(
      `${environment.endPoint}/users/api/updateUser/${id}`,
      data
    );
  }
}
