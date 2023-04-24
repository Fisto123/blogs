import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'hin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user!: [];
  constructor(private service: AuthService) {}
  ngOnInit(): void {
    this.user = this.service.loadUser();
    console.log(this.user);
  }
}
