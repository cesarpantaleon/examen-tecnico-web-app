 import {Inject, Injectable} from "@angular/core";
 import { Router } from '@angular/router';
import { delay, of, Subscription } from "rxjs";
 
 @Injectable({
  providedIn: 'root'
})
 export class StorageService {
 
  authToken: any;
  tokenSubscription = new Subscription()
  timeout:any;
  
   constructor(private router: Router,
      @Inject('LOCALSTORAGE') private localStorage: Storage) {
    
   }
   
   setAuthenticate(token: any): void {
    
     this.localStorage.setItem('token', JSON.stringify(token));
     console.log(token);
    //  this.timeout = this.jwtHelper.getTokenExpirationDate(token.token)!.valueOf() - new Date().valueOf();
    //  this.authToken = token;
    //  this.expirationCounter(this.timeout);

   }
   getAuthenticated():any{
    var sessionStr = this.localStorage.getItem('token');
    var token=(sessionStr) ? JSON.parse(sessionStr) : {} as any;
    
    return token;
  
   }
   isAuthenticated(): boolean {
    var auth=this.getAuthenticated();

    return auth.token!=undefined;
  };
 
  
  removeSession(){
    this.localStorage.removeItem("token");
  }

  // expirationCounter(timeout:any) {
  //   this.tokenSubscription.unsubscribe();
  //   this.tokenSubscription = of(null).pipe(delay(timeout)).subscribe((expired) => {

  //     this.logout();
  //     window.location.reload();
  //   });
  // }
  
    logout() {
    this.tokenSubscription.unsubscribe();
    this.authToken = null;
    this.localStorage.clear();
  }

 }
 