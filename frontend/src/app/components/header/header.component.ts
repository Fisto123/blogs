import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'hin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isUserAdmin!: any;
  constructor(private service: AuthService, private route: Router) {}
  form: any = {
    search: '',
  };
  ngOnInit(): void {
    this.loadUser();
  }
  loadUser() {
    this.isUserAdmin = this.service.loadUser();
    this.isUserAdmin = this.isUserAdmin?.user?.isAdmin;
  }
  logout() {
    this.service.logout();
    this.route.navigate(['/login']);
  }
}
