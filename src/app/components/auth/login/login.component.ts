import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/guard/storage.service';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = {} as any;
  public submitted: Boolean = false;
  public error: { code: number, message: string } = {} as any;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router) {

    this.error = { code: 0, message: "" };
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  public submitLogin(login: any): void {
    this.loading = true;
    this.error = { code: 0, message: "" } as any;
    if (this.loginForm.valid) {
      this.authenticationService.authenticate(login).subscribe({
        next: (data) => this.correctLogin(data),
        error: (error) => {

          console.log(error);
          if (error.error && error.error.message) {
            this.error = { code: 0, message: error.error.message };
          } else if (error.statusText) {
            this.error = { code: 0, message: error.statusText };
          }
          else {
            this.error = { code: 0, message: "Unknow error" };
          }

          this.loading = false;
        }
      });
    }
  }

  private correctLogin(data: any) {
    
    this.storageService.setAuthenticate(data);
    this.router.navigate(['consulta-ruc'], { replaceUrl: true });

    this.loading = false;
  }
}
