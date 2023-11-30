import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { StorageService } from "src/app/core/guard/storage.service";
import { PersonaService } from "src/app/services/persona.service";

@Component({
  selector: 'app-consulta-ruc',
  templateUrl: './consulta-ruc.component.html'
})
export class ConsultaRucComponent implements OnInit {

  public formPersona: FormGroup = {} as any;
  public error: { code: number, message: string } = {} as any;
  loading = false;
  ruc: string;
  message_success:string="";

  constructor(private _formBuilder: FormBuilder,
    private _personaService: PersonaService) {

      this.error.message="";
    console.log("Consulta-ruc");
  }

  ngOnInit() {
    this.init();
  }
  init() {
    this.formPersona = this._formBuilder.group({
      ruc: ['', [Validators.required]],
      razon_social: ['', [Validators.required]],
      estado: ['', []],
      direccion: ['', []],
      ubigeo: ['', []],
      departamento: ['', []],
      provincia: ['', []],
      distrito: ['', []]
    })
  }
  consultaRuc() {
    this.loading=true;
    this.error.message="";
    this.message_success="";
    this._personaService.get(this.ruc).subscribe({
      next: (data) => {

        if (data.ruc) {
          this.formPersona.setValue(data);
        }
        else {
          this.error.message = data.razon_social;
        }

        this.loading=false;
      },
      error: (e) => {
        console.log(e);
        this.loading=false;
      }
    })
  }
  postPersona(): void {
    this.error.message="";
    this.message_success="";
    this.loading = true;
    this.error = { code: 0, message: "" } as any;
    if (this.formPersona.valid) {
      this._personaService.post(this.formPersona.value).subscribe({
        next: (data) => this.success(data),
        error: (error) => {

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

  private success(data: any) {
    console.log(data);
    this.message_success="RUC registrado correctamente!!";
    this.loading = false;
  }
  limpiar() {
    this.ruc = "";
    this.init();
    this.error.message="";
    this.message_success="";
  }
}
