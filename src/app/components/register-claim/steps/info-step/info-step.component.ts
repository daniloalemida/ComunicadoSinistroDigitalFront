import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContratoAtivo, RetornoLogin, Sinistro } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-info-step',
  templateUrl: './info-step.component.html',
  styleUrls: ['./info-step.component.scss']
})
export class InfoStepComponent implements OnInit {
  selectedContract: ContratoAtivo;

  @Output() selectContract = new EventEmitter();
  @Input() dados: RetornoLogin;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor() { }

  ngOnInit(): void {
    if (this.filledMode) {
      this.selectedContract =
        this.dados.dadosContratosAtivos.find(
          historico => historico.codContrato == this.registerClaimFill.codContrato
        );
    } else {
      this.selectedContract =
        this.dados.dadosContratosAtivos.length == 1
        ? this.dados.dadosContratosAtivos[0]
        : null;
    }
    this.selectContract.emit(this.selectedContract);
  }

}
