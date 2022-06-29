import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {
  @Input()
  control: AbstractControl | null;
  @Input()
  tip: string;
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return "Campo obrigatório!"
    } else if (this.control.invalid) {
      let tipText = this.tip ? `Ex: ${this.tip}` : "";
      return `Formato inválido! ${tipText}`
    }
    return "";
  }
}
