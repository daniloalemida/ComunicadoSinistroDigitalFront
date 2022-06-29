import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-dots',
  templateUrl: './loading-dots.component.html',
  styleUrls: ['./loading-dots.component.scss']
})
export class LoadingDotsComponent implements OnInit {
  @Input() color!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
