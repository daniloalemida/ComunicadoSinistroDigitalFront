import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { Sinistro } from 'src/app/models/usuario.model';
import { SnackbarService } from 'src/app/services/snack-bar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { dateToString, hourToString } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-schedule-step',
  templateUrl: './schedule-step.component.html',
  styleUrls: ['./schedule-step.component.scss']
})
export class ScheduleStepComponent implements OnInit {
  scheduleFormGroup: FormGroup;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    this.scheduleFormGroup = this.formBuilder.group({
      agendar: [null, Validators.required],
      data: [],
      hora: [],
      cep: [],
      logradouro: [],
      numero: [],
      complemento: [],
      bairro: [],
      cidade: [],
      uf: [],
    });

    if (this.filledMode) {
      this.scheduleFormGroup.get("agendar").setValue(this.registerClaimFill.reboque.agendar);
      this.scheduleFormGroup.get("data").setValue(dateToString(this.registerClaimFill.reboque.data));
      this.scheduleFormGroup.get("hora").setValue(hourToString(this.registerClaimFill.reboque.data));
      this.scheduleFormGroup.get("cep").setValue(this.registerClaimFill.reboque.cep);
      this.scheduleFormGroup.get("logradouro").setValue(this.registerClaimFill.reboque.logradouro);
      this.scheduleFormGroup.get("numero").setValue(this.registerClaimFill.reboque.numero);
      this.scheduleFormGroup.get("complemento").setValue(this.registerClaimFill.reboque.complemento);
      this.scheduleFormGroup.get("bairro").setValue(this.registerClaimFill.reboque.bairro);
      this.scheduleFormGroup.get("cidade").setValue(this.registerClaimFill.reboque.cidade);
      this.scheduleFormGroup.get("uf").setValue(this.registerClaimFill.reboque.uf);
    }
  }

  consultaCep(event) {
    this.usuarioService.buscarCep(event.target.value)
      .subscribe(res => {
        this.scheduleFormGroup.get("uf").setValue(res.uf);
        this.scheduleFormGroup.get("bairro").setValue(res.bairro);
        this.scheduleFormGroup.get("cidade").setValue(res.localidade);
        this.scheduleFormGroup.get("logradouro").setValue(res.logradouro);
        if (!res.localidade) {
          this.scheduleFormGroup.get("uf").setValue("");
          this.scheduleFormGroup.get("cidade").setValue("");
          this.scheduleFormGroup.get("bairro").setValue("");
          this.scheduleFormGroup.get("logradouro").setValue("");
          this.snackbarService.openSnackBar("Tivemos um erro ao consulta o CEP.", "error");
        }
      },
      () => {
        this.scheduleFormGroup.get("uf").setValue("");
        this.scheduleFormGroup.get("cidade").setValue("");
        this.scheduleFormGroup.get("bairro").setValue("");
        this.scheduleFormGroup.get("logradouro").setValue("");
        this.snackbarService.openSnackBar("Tivemos um erro ao consulta o CEP.", "error");
      });
  }

  checkSchedule(event: boolean) {
    if (event == true) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        disableClose: true,
        data: {
          title: "Agendar reboque?",
          description: `O valor do reboque é de responsabilidade do cliente, o mesmo é calculado
            de acordo com os termos e condições informados no contrato.`
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.scheduleFormGroup.get("agendar").setValue(result);
        let validator = result === true ? Validators.required : null;

        this.scheduleFormGroup.get("data").setValidators(validator);
        this.scheduleFormGroup.get("data").updateValueAndValidity();

        this.scheduleFormGroup.get("hora").setValidators(validator);
        this.scheduleFormGroup.get("hora").updateValueAndValidity();

        this.scheduleFormGroup.get("logradouro").setValidators(validator);
        this.scheduleFormGroup.get("logradouro").updateValueAndValidity();

        this.scheduleFormGroup.get("numero").setValidators(validator);
        this.scheduleFormGroup.get("numero").updateValueAndValidity();

        this.scheduleFormGroup.get("bairro").setValidators(validator);
        this.scheduleFormGroup.get("bairro").updateValueAndValidity();

        this.scheduleFormGroup.get("cidade").setValidators(validator);
        this.scheduleFormGroup.get("cidade").updateValueAndValidity();

        this.scheduleFormGroup.get("uf").setValidators(validator);
        this.scheduleFormGroup.get("uf").updateValueAndValidity();
      });
    }
  }
}
