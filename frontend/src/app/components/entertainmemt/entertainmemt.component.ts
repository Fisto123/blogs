import { Component } from '@angular/core';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-entertainmemt',
  templateUrl: './entertainmemt.component.html',
  styleUrls: ['./entertainmemt.component.css'],
})
export class EntertainmemtComponent {
  cat: string = 'Entertainement';
  loadingEntertainment: boolean = false;
  errorEntertainment: string = '';
  EntertainementNews: any[] = [];
  constructor(private service: NewsService) {}
  ngOnInit(): void {
    this.loadEntertainementNews();
  }
  loadEntertainementNews() {
    this.loadingEntertainment = true;
    this.service.getNewsByCat(this.cat).subscribe(
      (data: any) => {
        this.loadingEntertainment = false;
        this.EntertainementNews = data;
      },
      (err) => {
        this.loadingEntertainment = false;
        this.errorEntertainment = err.error;
      }
    );
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
