import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
export interface registerModel {
  email: string;
  password: string;
  name: string;
}
@Component({
  selector: 'hin-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userData!: any;
  error: string = '';
  loading: boolean = false;
  form: registerModel = {
    email: '',
    password: '',
    name: '',
  };
  constructor(private service: AuthService, private router: Router) {}
  onSubmit() {
    this.loading = true;
    this.service.register(this.form).subscribe(
      (item) => {
        this.userData = item;
        if (this.userData !== null) {
          this.loading = false;
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        this.loading = false;
        this.error = err.error;
      }
    );
  }
}
