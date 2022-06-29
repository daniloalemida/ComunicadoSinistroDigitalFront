import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sinistro } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-responsibility-statement-step',
  templateUrl: './responsibility-statement-step.component.html',
  styleUrls: ['./responsibility-statement-step.component.scss']
})
export class ResponsibilityStatementStepComponent implements OnInit {
  checkTerms = false;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  @Output() sendRegister = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.filledMode) {
      this.checkTerms = true;
    }
  }

}
