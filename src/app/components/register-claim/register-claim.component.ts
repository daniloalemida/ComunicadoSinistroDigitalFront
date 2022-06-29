import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ContratoAtivo, Reboque, RegisterClaim, RetornoLogin, Sinistro, Terceiro, UpdateRegisterClaim } from 'src/app/models/usuario.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { SnackbarService } from 'src/app/services/snack-bar.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { getFormattedDate } from 'src/app/utils/date.utils';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ClaimInfoStepComponent } from './steps/claim-info-step/claim-info-step.component';
import { ClaimLocationStepComponent } from './steps/claim-location-step/claim-location-step.component';
import { IncidentReportStepComponent } from './steps/incident-report-step/incident-report-step.component';
import { ResponsibleInfoStepComponent } from './steps/responsible-info-step/responsible-info-step.component';
import { ScheduleStepComponent } from './steps/schedule-step/schedule-step.component';
import { ThirdPartyStepComponent } from './steps/third-party-step/third-party-step.component';

@Component({
  selector: 'app-register-claim',
  templateUrl: './register-claim.component.html',
  styleUrls: ['./register-claim.component.scss']
})
export class RegisterClaimComponent implements OnInit, AfterViewInit {
  filledMode: boolean;
  dados: RetornoLogin;
  codSinistro: number;
  registerClaimFill: Sinistro;
  selectedContract: ContratoAtivo;

  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild(ResponsibleInfoStepComponent) secondStep: ResponsibleInfoStepComponent;
  @ViewChild(ClaimInfoStepComponent) thirdStep: ClaimInfoStepComponent;
  @ViewChild(ThirdPartyStepComponent) fourthStep: ThirdPartyStepComponent;
  @ViewChild(ClaimLocationStepComponent) fifthStep: ClaimLocationStepComponent;
  @ViewChild(IncidentReportStepComponent) sixthStep: IncidentReportStepComponent;
  @ViewChild(ScheduleStepComponent) eighthStep: ScheduleStepComponent;

  constructor(
    private localStorage: LocalStorageService,
    private snackbarService: SnackbarService,
    private dialog: MatDialog,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    let codSinistroParam = this.route.snapshot.paramMap.get("codSinistro");
    if (codSinistroParam) {
      this.codSinistro = parseInt(codSinistroParam);
    }
    this.filledMode = this.codSinistro && this.codSinistro !== null;
  }

  ngOnInit(): void {
    this.dados = this.localStorage.getLoginResponse();
    if (this.filledMode) {
      this.registerClaimFill =
        this.dados.historicoSinistro.find(
          historico => historico.codSinistro == this.codSinistro
        );

      this.selectedContract =
        this.dados.dadosContratosAtivos.find(
          historico => historico.codContrato == this.registerClaimFill.codContrato
        );
    }
  }

  ngAfterViewInit() {
    if (this.filledMode && !this.registerClaimFill.boEnviado) {
      this.stepper.selectedIndex = 5;
    }
  }

  sendRegister() {
    if (this.filledMode === true) {
      this.updateRegisterClaim();
    } else {
      this.registerClaim();
    }
  }

  selectContract(contract: ContratoAtivo) {
    this.selectedContract = contract;
  }

  registerClaim() {
    let formatedRegister = new RegisterClaim({
      codCondutorResponsavel: this.secondStep.responsavel.id || 0,
      dataSinistro: getFormattedDate(
        this.thirdStep.claimInfoFormGroup.value.dataSinistro,
        this.thirdStep.claimInfoFormGroup.value.horaSinistro
      ),
      descricaoSinistro: this.thirdStep.claimInfoFormGroup.value.descricaoSinistro,
      terceiroEnvolvido: this.fourthStep.thirdPartyForm.value.terceiroEnvolvido,
      terceiroIdentificado: this.fourthStep.thirdPartyForm.value.terceiroIdentificado || false,
      terceiroResponsavel: this.fourthStep.thirdPartyForm.value.terceiroResponsavel || false,
      autorizoSeguro: this.fourthStep.thirdPartyForm.value.autorizoSeguro || false,
      terceiros: [new Terceiro({
        id: 0,
        email: "",
        nome: this.fourthStep.thirdPartyForm.value.nome,
        telefone: this.fourthStep.thirdPartyForm.value.telefone,
      })],
      cep: this.fifthStep.claimLocationFormGroup.value.cep,
      logradouro: this.fifthStep.claimLocationFormGroup.value.logradouro,
      numero: this.fifthStep.claimLocationFormGroup.value.numero,
      bairro: this.fifthStep.claimLocationFormGroup.value.bairro,
      complemento: this.fifthStep.claimLocationFormGroup.value.complemento,
      cidade: this.fifthStep.claimLocationFormGroup.value.cidade,
      uf: this.fifthStep.claimLocationFormGroup.value.uf,
      boEnviado: this.sixthStep.boEnviado,
      codCliente: this.secondStep.selectedContract.cliente.id,
      codContrato: this.secondStep.selectedContract.codContrato,
      codVeiculo: this.secondStep.selectedContract.veiculoAlugado.id,
      reboque: new Reboque({
        id: 0,
        agendar: this.eighthStep.scheduleFormGroup.value.agendar,
        cep: this.eighthStep.scheduleFormGroup.value.cep,
        logradouro: this.eighthStep.scheduleFormGroup.value.logradouro,
        numero: this.eighthStep.scheduleFormGroup.value.numero || 0,
        complemento: this.eighthStep.scheduleFormGroup.value.complemento,
        bairro: this.eighthStep.scheduleFormGroup.value.bairro,
        cidade: this.eighthStep.scheduleFormGroup.value.cidade,
        uf: this.eighthStep.scheduleFormGroup.value.uf,
        idAgenciaDestino: 0,
      }),
      status: "",
      temRoboque: this.eighthStep.scheduleFormGroup.value.agendar
    });

    this.usuarioService.registerClaim(formatedRegister).subscribe(
      (res: any) => {
        this.snackbarService.openSnackBar("Sinistro cadastrado com sucesso!", "success");
        this.router.navigateByUrl(`confirmation/${res.object.codSinistro}`);
      },
      () => this.snackbarService.openSnackBar("Tivemos um erro ao cadastrar o sinistro, tente novamente", "error")
    );
  }

  updateRegisterClaim() {
    let formatedRegister: UpdateRegisterClaim;

    this.usuarioService.getRegisterClaimById(this.codSinistro)
      .subscribe(
        res => {
          formatedRegister = res;
          formatedRegister.boEnviado = this.sixthStep.boEnviado;

          this.usuarioService.updateRegisterClaim(formatedRegister).subscribe(
            () => {
              this.snackbarService.openSnackBar("Sinistro atualizado com sucesso!", "success");
              this.router.navigateByUrl("home");
            },
            () => this.snackbarService.openSnackBar("Tivemos um erro ao atualizar o sinistro, tente novamente", "error")
          );
        },
        () => this.snackbarService.openSnackBar("Tivemos um erro ao atualizar o sinistro, tente novamente", "error")
      );
  }
}
