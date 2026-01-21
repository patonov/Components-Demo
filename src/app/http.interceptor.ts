import { HttpInterceptorFn } from "@angular/common/http";
import { API_URL } from "./constants";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith('/api')){
    req = req.clone({
      url: req.url.replace('/api', API_URL)
    });
  }
  
  return next(req);
};

// @Injectable()
// export class HttpInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     //return next.handle(req);
//     return null;
//   }
// }

// export const httpInterceptor: Provider = {
//   multi: true,
//   useClass: HttpInterceptor,
//   provide: HTTP_INTERCEPTORS,
// };