import { Component } from '@angular/core';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css'],
})
export class SportComponent {
  loadingSport: boolean = false;
  errorSport: string = '';
  cat: string = 'Sports';
  sportNews!: any;
  constructor(private service: NewsService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadSportNews();
  }
  loadSportNews() {
    this.loadingSport = true;
    this.service.getNewsByCat(this.cat).subscribe(
      (data) => {
        this.loadingSport = false;

        this.sportNews = data;
      },
      (err) => {
        this.loadingSport = false;
        this.errorSport = err.error;
      }
    );
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
