import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamableLComponent } from './flamable-l.component';

describe('FlamableLComponent', () => {
  let component: FlamableLComponent;
  let fixture: ComponentFixture<FlamableLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlamableLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlamableLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
