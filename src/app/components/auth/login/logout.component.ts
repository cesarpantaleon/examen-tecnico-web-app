import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "src/app/core/guard/storage.service";

@Component({
    selector: 'app-login',
    template:"<div>Closing session...</div>"
  })
export class LogoutComponent implements OnInit {
    constructor(private storageService:StorageService,private router:Router) {

        storageService.removeSession();
        this.router.navigate(['/login'],{replaceUrl: true});
     }

    ngOnInit() {
    }
}