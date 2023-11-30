import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GlobalVariable } from "../global";

@Injectable()
export class PersonaService{
    constructor(private http:HttpClient){

    }
    
    get(ruc:string): Observable<any> {
        return this.http.get<any>(`${GlobalVariable.PERSONA.RUC}/${ruc}`, {});
    }
    post(data:any): Observable<any> {
        return this.http.post<any>(`${GlobalVariable.PERSONA.POST}`, data);
    }
}