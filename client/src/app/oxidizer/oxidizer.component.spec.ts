import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxidizerComponent } from './oxidizer.component';

describe('OxidizerComponent', () => {
  let component: OxidizerComponent;
  let fixture: ComponentFixture<OxidizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxidizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxidizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
