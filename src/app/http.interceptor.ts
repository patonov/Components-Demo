import { HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { API_URL } from "./constants";
import { catchError, EMPTY, tap } from "rxjs";

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  //debugger;
  if (req.url.startsWith('/api')) {
    req = req.clone({
      url: req.url.replace('/api', API_URL)
    });
  }
  
  return next(req).pipe(
    tap((req) => {
      if (req instanceof HttpRequest){
        console.log(req);
      }
    }),
    catchError((err) => {
      if (err.status === 404){
        return EMPTY;
      }
      
      //console.log(err?.status);
      return [err];
    })
  )
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