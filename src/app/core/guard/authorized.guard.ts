import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizatedGuard implements CanActivate {

  constructor(private router: Router,
    private storageService:StorageService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("canactivate");
    if (this.storageService.isAuthenticated()) {
      
        this.router.navigate(['/consulta-ruc']);
       
        return true;
    }
    else{
      
        this.router.navigateByUrl('/login');
        return true;
    }
  }
}
