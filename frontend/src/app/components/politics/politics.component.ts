import { Component } from '@angular/core';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css'],
})
export class PoliticsComponent {
  cat: string = 'Politics';
  politicsNews: any[] = [];
  loadingPolitics: boolean = false;
  errorPolitics: string = '';
  constructor(private service: NewsService) {}
  ngOnInit(): void {
    this.loadPoliticsNews();
  }
  loadPoliticsNews() {
    this.loadingPolitics = true;
    this.service.getNewsByCat(this.cat).subscribe(
      (data: any) => {
        this.politicsNews = data;
        this.loadingPolitics = false;
      },
      (err) => {
        this.loadingPolitics = false;
        this.errorPolitics = err.error;
      }
    );
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
