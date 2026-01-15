// import { HttpInterceptorFn } from '@angular/common/http';

import { HTTP_INTERCEPTORS, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";

// export const httpInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req);
  }
}

export const httpInterceptor: Provider = {
  multi: true,
  useClass: HttpInterceptor,
  provide: HTTP_INTERCEPTORS,
};