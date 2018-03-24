import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import { PickupRequestsComponent } from './pickup-requests.component';

describe('PickupRequestsComponent', () => {
  let component: PickupRequestsComponent;
  let fixture: ComponentFixture<PickupRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
