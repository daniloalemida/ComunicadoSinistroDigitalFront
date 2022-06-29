import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sinistro } from 'src/app/models/usuario.model';
import { SnackbarService } from 'src/app/services/snack-bar.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-claim-location-step',
  templateUrl: './claim-location-step.component.html',
  styleUrls: ['./claim-location-step.component.scss']
})
export class ClaimLocationStepComponent implements OnInit {
  claimLocationFormGroup: FormGroup;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor(
    private formBuilder: FormBuilder,
    private snackbarService: SnackbarService,
    private usuarioService: UsuarioService,
    ) { }

  ngOnInit(): void {
    this.claimLocationFormGroup = this.formBuilder.group({
      cep: [],
      logradouro: [],
      numero: [],
      complemento: [],
      bairro: [],
      cidade: [],
      uf: [],
    });

    if (this.filledMode) {
      this.claimLocationFormGroup.get("cep").setValue(this.registerClaimFill.cep);
      this.claimLocationFormGroup.get("logradouro").setValue(this.registerClaimFill.logradouro);
      this.claimLocationFormGroup.get("numero").setValue(this.registerClaimFill.numero);
      this.claimLocationFormGroup.get("complemento").setValue(this.registerClaimFill.complemento);
      this.claimLocationFormGroup.get("bairro").setValue(this.registerClaimFill.bairro);
      this.claimLocationFormGroup.get("cidade").setValue(this.registerClaimFill.cidade);
      this.claimLocationFormGroup.get("uf").setValue(this.registerClaimFill.uf);
    }
  }

  consultaCep(event) {
    this.usuarioService.buscarCep(event.target.value)
      .subscribe(res => {
        this.claimLocationFormGroup.get("uf").setValue(res.uf);
        this.claimLocationFormGroup.get("bairro").setValue(res.bairro);
        this.claimLocationFormGroup.get("cidade").setValue(res.localidade);
        this.claimLocationFormGroup.get("logradouro").setValue(res.logradouro);
        if (!res.localidade) {
          this.claimLocationFormGroup.get("uf").setValue("");
          this.claimLocationFormGroup.get("cidade").setValue("");
          this.claimLocationFormGroup.get("bairro").setValue("");
          this.claimLocationFormGroup.get("logradouro").setValue("");
          this.snackbarService.openSnackBar("Tivemos um erro ao consulta o CEP.", "error");
        }
      },
      () => {
        this.claimLocationFormGroup.get("uf").setValue("");
        this.claimLocationFormGroup.get("cidade").setValue("");
        this.claimLocationFormGroup.get("bairro").setValue("");
        this.claimLocationFormGroup.get("logradouro").setValue("");
        this.snackbarService.openSnackBar("Tivemos um erro ao consulta o CEP.", "error");
      });
  }
}
