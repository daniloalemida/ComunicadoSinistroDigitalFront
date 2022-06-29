import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Sinistro } from 'src/app/models/usuario.model';
import { dateToString, hourToString } from 'src/app/utils/date.utils';

@Component({
  selector: 'app-claim-info-step',
  templateUrl: './claim-info-step.component.html',
  styleUrls: ['./claim-info-step.component.scss']
})
export class ClaimInfoStepComponent implements OnInit {
  claimInfoFormGroup: FormGroup;
  @Input() filledMode: boolean;
  @Input() registerClaimFill: Sinistro;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.claimInfoFormGroup = this.formBuilder.group({
      dataSinistro: [],
      horaSinistro: [],
      descricaoSinistro: [],
    });

    if (this.filledMode) {
      this.claimInfoFormGroup.get("dataSinistro")
        .setValue(dateToString(this.registerClaimFill.dataSinistro));

      this.claimInfoFormGroup.get("horaSinistro")
        .setValue(hourToString(this.registerClaimFill.dataSinistro));

      this.claimInfoFormGroup.get("descricaoSinistro")
        .setValue(this.registerClaimFill.descricaoOcorrido);
    }
  }

}
