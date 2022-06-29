import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sinistro } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-third-party-step',
  templateUrl: './third-party-step.component.html',
  styleUrls: ['./third-party-step.component.scss']
})
export class ThirdPartyStepComponent implements OnInit {
  thirdPartyForm: FormGroup;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.thirdPartyForm = this.formBuilder.group({
      terceiroIdentificado: [null],
      terceiroEnvolvido: [null, Validators.required],
      terceiroResponsavel: [null],
      autorizoSeguro: [null],
      nome: [null],
      telefone: [null]
    });

    if (this.filledMode) {
      this.thirdPartyForm.get("terceiroIdentificado").setValue(this.registerClaimFill.terceiroIdentificado);
      this.thirdPartyForm.get("terceiroEnvolvido").setValue(this.registerClaimFill.terceiroEnvolvido);
      this.thirdPartyForm.get("terceiroResponsavel").setValue(this.registerClaimFill.terceiroResponsavel);
      this.thirdPartyForm.get("autorizoSeguro").setValue(this.registerClaimFill.autorizoSeguro);
      this.thirdPartyForm.get("nome").setValue(this.registerClaimFill.terceiro?.nome);
      this.thirdPartyForm.get("telefone").setValue(this.registerClaimFill.terceiro?.telefone);
    }
  }

  selectThirdIdentified(event: boolean) {
    let validator = event === true ? Validators.required : null;

    this.thirdPartyForm.get("nome").setValidators(validator);
    this.thirdPartyForm.get("nome").updateValueAndValidity();

    this.thirdPartyForm.get("telefone").setValidators(validator);
    this.thirdPartyForm.get("telefone").updateValueAndValidity();

  }

  selectInvolviment(event: boolean) {
    let validator = event === true ? Validators.required : null;

    this.thirdPartyForm.get("terceiroResponsavel").setValidators(validator);
    this.thirdPartyForm.get("terceiroResponsavel").updateValueAndValidity();

    this.thirdPartyForm.get("autorizoSeguro").setValidators(validator);
    this.thirdPartyForm.get("autorizoSeguro").updateValueAndValidity();

    this.thirdPartyForm.get("terceiroIdentificado").setValidators(validator);
    this.thirdPartyForm.get("terceiroIdentificado").updateValueAndValidity();
  }
}
