import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiationComponent } from './radiation.component';

describe('RadiationComponent', () => {
  let component: RadiationComponent;
  let fixture: ComponentFixture<RadiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
