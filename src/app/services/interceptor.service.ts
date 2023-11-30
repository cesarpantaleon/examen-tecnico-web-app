import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var sessionStr = localStorage.getItem('token');
    
    var user = (sessionStr) ? <any>JSON.parse(sessionStr) : undefined as any;

    if (user) {
      req = req.clone({
        setHeaders: {
          "Authorization": user.token
        }
      });
    }
    

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login',{replaceUrl: true});
        }

        return throwError( err );

      })
    );
  }
}