import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlameLComponent } from './flame-l.component';

describe('FlameLComponent', () => {
  let component: FlameLComponent;
  let fixture: ComponentFixture<FlameLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlameLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlameLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
