import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.scss']
})
export class ConfirmationPageComponent implements OnInit {
  codSinistro: string;

  constructor(private route: ActivatedRoute) {
    this.codSinistro = this.route.snapshot.paramMap.get("codSinistro");
  }

  ngOnInit(): void {
  }

}
