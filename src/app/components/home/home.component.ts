import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sinistro } from 'src/app/models/usuario.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SnackbarService } from 'src/app/services/snack-bar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { dateToString, hourToString } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sinistros: Sinistro[] = [];
  loading = true;
  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly usuarioService: UsuarioService,
    private readonly snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    let loginForm = this.localStorageService.getLogin();
    this.usuarioService.login(loginForm)
      .subscribe(res => {
        this.localStorageService.setLoginResponse(res.object);
        this.sinistros = res.object.historicoSinistro.map(sinistro => {
          return new Sinistro({
            ...sinistro,
            dataSinistro:
              `${dateToString(sinistro.dataSinistro)} às ${hourToString(sinistro.dataSinistro)}h`
          })
        });
        this.loading = false;
      },
      () => {
        this.loading = false;
        this.snackbarService.openSnackBar("Tivemos um erro ao carregar seu histórico, tente novamente", "error");
      });
  }
}
