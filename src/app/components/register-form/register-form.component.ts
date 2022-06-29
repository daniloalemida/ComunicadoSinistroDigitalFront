import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroUsuario } from 'src/app/models/usuario.model';
import { SnackbarService } from 'src/app/services/snack-bar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { stringToDate } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
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
            animate('0.2s ease-in',
              style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  @Output()
  toggleRegister = new EventEmitter();
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly usuarioService: UsuarioService,
    private readonly snackBarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ])],
      celular: ['', Validators.required],
      data_nasc: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^(0[1-9]|[12][0-9]|3[01])[/]?(0[1-9]|1[012])[/]?[12][0-9]{3}$")
      ])],
      cpf: ['', [Validators.required, Validators.min(11)]],
      senha: ['', Validators.required],
    });
  }

  register() {
    let date = stringToDate(this.registerForm.get("data_nasc").value);
    let register = new CadastroUsuario({
      ...this.registerForm.value,
      data_nasc: date.toISOString()
    });

    this.usuarioService.cadastroUsuario(register).then(
      res => {
        if (res == true) {
          this.snackBarService.openSnackBar("Usuário cadastrado com sucesso!", "success")
        }
      }
    ).catch(err => this.snackBarService.openSnackBar(err.error.text, "error"))
  }

  back() {
    this.toggleRegister.emit();
  }
}
