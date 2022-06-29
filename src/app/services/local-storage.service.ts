import { Injectable } from '@angular/core';
import { RetornoLogin } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public getLoginResponse(): RetornoLogin {
    return JSON.parse(localStorage.getItem("login_response"));
  }

  public setLoginResponse(loginResponse: RetornoLogin) {
    localStorage.setItem("login_response", JSON.stringify(loginResponse));
  }

  public getLogin(): { login: string, senha: string } {
    return JSON.parse(localStorage.getItem("login"));
  }

  public setLogin(login: { login: string, senha: string }) {
    localStorage.setItem("login", JSON.stringify(login));
  }
}