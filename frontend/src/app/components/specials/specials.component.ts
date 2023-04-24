import { Component } from '@angular/core';
import { NewsService } from 'src/app/news/news.service';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'hin-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css'],
})
export class SpecialsComponent {
  constructor(private news: NewsService) {}
  tech!: any[];
  family!: any[];
  health!: any[];
  education!: any[];

  ngOnInit(): void {
    this.getTechNews();
    this.getEducationNews();
    this.getFamilyNews();
    this.getHealthNews();
  }
  getTechNews() {
    this.news.getNewsByCat('Tech').subscribe((data: any) => {
      this.tech = data;
    });
  }
  getHealthNews() {
    this.news.getNewsByCat('Health').subscribe((data: any) => {
      this.health = data;
    });
  }
  getFamilyNews() {
    this.news.getNewsByCat('Family').subscribe((data: any) => {
      this.family = data;
    });
  }
  getEducationNews() {
    this.news.getNewsByCat('Education').subscribe((data: any) => {
      this.education = data;
    });
  }
  nav(id: string) {
    this.news.nav(id);
  }
}
