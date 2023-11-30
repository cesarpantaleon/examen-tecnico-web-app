import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsultaRucComponent } from './consulta-ruc/consulta-ruc.component';
import { PersonaService } from 'src/app/services/persona.service';

@NgModule({
  declarations: [
    ConsultaRucComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    PagesRoutingModule
  ],
  providers:[
    PersonaService
  ]
})
export class PagesModule { }
