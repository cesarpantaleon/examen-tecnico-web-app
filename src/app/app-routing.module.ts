import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { AuthorizatedGuard } from './core/guard/authorized.guard';

const routes: Routes = [
  
  { path: '', loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule)
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:"**",component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }