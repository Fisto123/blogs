import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { News } from '../model/model';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient, private router: Router) {}
  getLatestNews() {
    return this.http
      .get<News>(`${environment.endPoint}/news/api/getLatestNews`)
      .pipe(
        map((news) => {
          return news;
        })
      );
  }
  getTopNews() {
    return this.http
      .get<News>(`${environment.endPoint}/news/api/getTopNews`)
      .pipe(
        map((news) => {
          return news;
        })
      );
  }
  getNewsByCat(cat: string) {
    return this.http
      .get<News>(`${environment.endPoint}/news/api/getNewsCategory?cat=${cat}`)
      .pipe(
        map((news) => {
          return news;
        })
      );
  }
  getNewsById(id: string) {
    return this.http
      .get<News>(`${environment.endPoint}/news/api/getNewsById/${id}`)
      .pipe(
        map((news) => {
          return news;
        })
      );
  }
  nav(id: string) {
    this.router.navigate([`/singleNews/${id}`]);
  }
  postNews(data: any) {
    return this.http
      .post<News>(`${environment.endPoint}/news/api/createNews`, data)
      .pipe(
        map((news) => {
          return news;
        })
      );
  }
}
