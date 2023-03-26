import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const authToken = localStorage.getItem('token');

    if(authToken) {
      const authRequest = request.clone({headers:request.headers.set('Authorization', 'Bearer ' + authToken)});
      return next.handle(authRequest);
    }
    
    return next.handle(request);
  }
}
