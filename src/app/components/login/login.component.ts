import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SnackbarService } from 'src/app/services/snack-bar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s ease-out',
              style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.1s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm: FormGroup;
  registerView = false;
  showPassword = false;

  constructor(
    private readonly router: Router,
    private readonly matDialog: MatDialog,
    private readonly formBuilder: FormBuilder,
    private readonly usuarioService: UsuarioService,
    private readonly snackbarService: SnackbarService,
    private readonly localStorageService: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      cpf: ['', [Validators.required, Validators.min(11)]],
      senha: ['', Validators.required],
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  forgotPassword() {
    this.matDialog.open(
      ForgotPasswordComponent,
      {
        data: { cpf: this.loginForm.get("cpf").value }
      }
    );
  }

  login() {
    this.loading = true;
    let loginForm = {
      login: this.loginForm.get("cpf").value,
      senha: this.loginForm.get("senha").value
    };
    this.usuarioService.login(loginForm).subscribe(
      res => {
        this.localStorageService.setLogin(loginForm);
        this.localStorageService.setLoginResponse(res.object);
          this.router.navigateByUrl("home");
          this.loading = false;
      },
      () => {
        this.snackbarService.openSnackBar("Tivemos um erro ao efetuar seu login.", "error");
        this.loading = false;
      }
    );
  }

  toggleRegister() {
    this.registerView = !this.registerView;
  }
}
