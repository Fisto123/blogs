import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/model/model';
import { NewsService } from 'src/app/news/news.service';

interface newsModel2 {
  time: string;
  news: string;
  categories: string;
}
@Component({
  selector: 'hin-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
})
export class LatestComponent {
  latestNews: any[] = [];
  errorLatest: string = '';
  loadingLatest: boolean = false;
  errorTop: string = '';
  loadingTop: boolean = false;
  topNews: any[] = [];
  new: any;
  constructor(private service: NewsService, private router: Router) {}
  ngOnInit(): void {
    this.loadLatestNews();
    this.loadTopNews();
  }

  loadLatestNews() {
    this.loadingLatest = true;
    this.service.getLatestNews().subscribe(
      (data: any) => {
        this.loadingLatest = false;
        this.latestNews = data;
      },
      (err) => {
        this.loadingLatest = false;
        this.errorLatest = err;
      }
    );
  }
  loadTopNews() {
    this.loadingTop = true;
    this.service.getTopNews().subscribe(
      (data: any) => {
        this.loadingTop = false;
        this.topNews = data;
      },
      (err) => {
        this.loadingTop = false;
        this.errorTop = err;
      }
    );
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
