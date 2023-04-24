import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Tokeninterceptor implements HttpInterceptor {
  user: any = localStorage.getItem('user');
  parsedUser = this.user && JSON.parse(this.user);
  token: any = this.parsedUser?.token;
  constructor() {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let jwtToken = req.clone({
      setHeaders: { token: `Bearer ${this.token}` },
    });
    return next.handle(jwtToken);
  }
}
