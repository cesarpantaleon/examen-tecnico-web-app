import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { GlobalVariable } from "src/app/global";
@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  authenticate(login: any): Observable<any> {
    return this.http.post<any>(GlobalVariable.AUTH.LOGIN, login);
  }
  
}
