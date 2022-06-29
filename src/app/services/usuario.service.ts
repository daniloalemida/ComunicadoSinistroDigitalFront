import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BuscaCep, CadastroUsuario, RegisterClaim, RetornoLogin, Sinistro, UpdateRegisterClaim } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API_URL = environment.sinistro_api_url;

  constructor(private httpClient: HttpClient) { }

  cadastroUsuario(cadastroForm: CadastroUsuario) {
    return this.httpClient.post(
      `${this.API_URL}Cliente`,
      cadastroForm,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    ).toPromise();
  }

  login(loginForm: { login: string, senha: string }): Observable<{"object": RetornoLogin}>  {
    return this.httpClient.post<{object: RetornoLogin}>(
      `${this.API_URL}login?login=${loginForm.login}&senha=${loginForm.senha}`,
      {},
    );
  }

  registerClaim(claim: RegisterClaim): Observable<{
    codSinistro: number,
    mensagemReboque: string,
    mensagemTerceiro: string
  }> {
    return this.httpClient.post<{
      codSinistro: number,
      mensagemReboque: string,
      mensagemTerceiro: string
    }>(
      `${this.API_URL}ComunicadoSinistro`,
      claim,
    );
  }

  updateRegisterClaim(claim: UpdateRegisterClaim) {
    return this.httpClient.put(
      `${this.API_URL}ComunicadoSinistro`,
      claim,
    );
  }

  getRegisterClaimById(id): Observable<UpdateRegisterClaim>  {
    return this.httpClient.get<UpdateRegisterClaim>(
      `${this.API_URL}ComunicadoSinistro/${id}`,
    );
  }

  getRegisterClaim(): Observable<Sinistro[]>  {
    return this.httpClient.get<Sinistro[]>(
      `${this.API_URL}ComunicadoSinistro`,
    );
  }

  buscarCep(cep: string): Observable<BuscaCep> {
    return this.httpClient.get<BuscaCep>(
      `https://viacep.com.br/ws/${cep}/json/`
    );
  }
}