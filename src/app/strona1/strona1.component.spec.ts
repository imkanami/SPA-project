import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Strona1Component } from './strona1.component';

describe('Strona1Component', () => {
  let component: Strona1Component;
  let fixture: ComponentFixture<Strona1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Strona1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Strona1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
