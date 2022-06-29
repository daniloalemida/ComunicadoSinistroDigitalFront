import { Component, Input, OnInit } from '@angular/core';
import { ContratoAtivo, RetornoLogin, Sinistro } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-responsible-info-step',
  templateUrl: './responsible-info-step.component.html',
  styleUrls: ['./responsible-info-step.component.scss']
})
export class ResponsibleInfoStepComponent implements OnInit {
  responsavel: any;

  @Input() selectedContract: ContratoAtivo;
  @Input() dados: RetornoLogin;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor() { }

  ngOnInit(): void {
    this.responsavel = this.selectedContract?.cliente;

    if (this.filledMode && this.registerClaimFill.terceiroResponsavel == true) {
       this.responsavel = "0";
    }
  }

}
