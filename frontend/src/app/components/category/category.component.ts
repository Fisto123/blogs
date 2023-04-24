import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hin-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  constructor(private router: Router) {}
  navItems = ['News', 'Sports', 'Politics', 'Business', 'Healthwise', 'Tech'];
  handleNav(cat: string) {
    this.router.navigate([`singlecat/${cat}`]);
  }
}
