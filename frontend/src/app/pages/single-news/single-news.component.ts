import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.css'],
})
export class SingleNewsComponent {
  singleNews!: any;
  relatedNews!: any[];
  loading: boolean = false;
  error: string = '';
  loadingLatest: boolean = false;
  errorLatest: string = '';
  latestNews!: any;
  id!: any;
  constructor(private service: NewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getNewsDetails();
    this.loadLatestNews();
  }
  getNewsDetails() {
    this.loading = true;
    this.route.paramMap.subscribe((params) => {
      this.id = this.route.snapshot.paramMap.get('id');
      this.service.getNewsById(this.id).subscribe(
        (data) => {
          this.loading = false;
          this.singleNews = data;

          this.service.getNewsByCat(data.categories).subscribe((data: any) => {
            this.relatedNews = data;
          });
        },

        (err) => {
          this.loading = false;
          this.error = err.error;
        }
      );
    });
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
        this.errorLatest = err.error;
      }
    );
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
