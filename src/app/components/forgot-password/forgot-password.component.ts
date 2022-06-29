import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  cpf: FormControl = new FormControl("", [Validators.required, Validators.min(11)])
  constructor() { }

  ngOnInit(): void {
  }

}
