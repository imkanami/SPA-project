import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strona2',
  template: `
    <p>
      strona2 works!
    </p>
    <style>
    mat-grid-tile {
      background: rgba(175, 175, 175, 0.32);
    }
    </style>
    <mat-grid-list cols="2" rowHeight="2:1">
  <mat-grid-tile>
  <img src="https://picsum.photos/604" alt="" />
  </mat-grid-tile>
  <mat-grid-tile>
  <img src="https://picsum.photos/603" alt="" />
  </mat-grid-tile>
  <mat-grid-tile>
  <img src="https://picsum.photos/602" alt="" />
  </mat-grid-tile>
  <mat-grid-tile>
  <img src="https://picsum.photos/601" alt="" />
  </mat-grid-tile>
</mat-grid-list>
  `,
  styles: [
  ]
})
export class Strona2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
