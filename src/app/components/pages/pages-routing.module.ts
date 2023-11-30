import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizatedGuard } from "src/app/core/guard/authorized.guard";
import { ConsultaRucComponent } from "./consulta-ruc/consulta-ruc.component";

const routes: Routes = [
    {path:'',redirectTo:'consulta-ruc',pathMatch:'full'},
    {path:'consulta-ruc',component:ConsultaRucComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PagesRoutingModule {}