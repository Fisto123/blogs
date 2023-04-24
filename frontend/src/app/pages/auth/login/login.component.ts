import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
interface Login {
  email: string;
  password: string;
}
@Component({
  selector: 'hin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData!: any;
  loading!: boolean;
  success: string = '';
  constructor(private service: AuthService, private router: Router) {}
  form: Login = {
    email: '',
    password: '',
  };
  err: string = '';
  ngOnInit(): void {}
  onSubmit() {
    this.loading = true;
    this.service.login(this.form).subscribe(
      (item) => {
        this.userData = item;
        if (this.userData !== null) {
          this.success = 'Login successful';
          localStorage.setItem('user', JSON.stringify(item));
          this.router.navigate(['']);
          this.loading = false;
        }
      },
      (err) => {
        this.err = err.error;
        this.loading = false;
      }
    );
  }
}
