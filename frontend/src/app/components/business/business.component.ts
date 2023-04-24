import { Component } from '@angular/core';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent {
  cat: string = 'Business';
  BusinessNews!: any;
  loadingBusiness: boolean = false;
  errorBusiness: string = '';
  constructor(private service: NewsService) {}
  ngOnInit(): void {
    this.loadBusinessNews();
  }
  loadBusinessNews() {
    this.loadingBusiness = true;
    this.service.getNewsByCat(this.cat).subscribe(
      (data) => {
        this.loadingBusiness = false;

        this.BusinessNews = data;
      },
      (err) => {
        this.loadingBusiness = false;
        this.errorBusiness = err.error;
      }
    );
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
