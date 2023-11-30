import { environment as INV } from "src/environments/environment";

export const GlobalVariable = Object.freeze({
    AUTH:{
        LOGIN :INV.apiUrl+ 'api/user/signin'
    },
    PERSONA:{
        RUC:INV.apiUrl+'api/persona-juridica',
        POST:INV.apiUrl+'api/persona-juridica'
    }
});
