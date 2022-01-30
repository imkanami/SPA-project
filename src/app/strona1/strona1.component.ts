import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strona1',
  template: `
  <style>
  img {
    border: 5px solid #f7f7f7;
  }
  #mat-tab-label-content {
    color: f7f7f7;
  }
  </style>
    <mat-tab-group style="align-items: center; margin-top: 10%; color: #f7f7f7;">
  <mat-tab label="First">
    <img src="https://randomwordgenerator.com/img/picture-generator/57e4d441435baa14f1dc8460962e33791c3ad6e04e507749742c78d5914cc4_640.jpg" alt="" />
  </mat-tab>
  <mat-tab label="Second">
    <img src="https://randomwordgenerator.com/img/picture-generator/50e9d543425ab10ff3d8992cc12c30771037dbf85254794e732879d79544_640.jpg" alt="" />
  </mat-tab>
  <mat-tab label="Third">
    <img src="https://randomwordgenerator.com/img/picture-generator/55e8d24b4b52a414f1dc8460962e33791c3ad6e04e5074417d2e72d39744c6_640.jpg" alt="" />
  </mat-tab>
</mat-tab-group>
  `,
  styles: [
  ]
})
export class Strona1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
