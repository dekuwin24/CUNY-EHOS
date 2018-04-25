import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplosiveComponent } from './explosive.component';

describe('ExplosiveComponent', () => {
  let component: ExplosiveComponent;
  let fixture: ComponentFixture<ExplosiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplosiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplosiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
