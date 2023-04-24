import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NewsService } from 'src/app/news/news.service';

@Component({
  selector: 'hin-singlecategory',
  templateUrl: './singlecategory.component.html',
  styleUrls: ['./singlecategory.component.css'],
})
export class SinglecategoryComponent {
  category!: any;
  catNews!: any[];
  loading: boolean = false;
  error: string = '';

  constructor(private route: ActivatedRoute, private service: NewsService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('cat')!;
    });
    this.getNews();
  }

  getNews() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('cat')!;
      this.loading = true;
      this.service.getNewsByCat(this.category).subscribe(
        (items: any) => {
          this.loading = false;
          this.catNews = items;
        },
        (err) => {
          this.loading = false;
          this.error = err;
        }
      );
    });
  }
  nav(id: string) {
    this.service.nav(id);
  }
}
