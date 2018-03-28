import {NgModule} from '@angular/core';
import {ButtonModule,StepsModule,InputMaskModule,AutoCompleteModule, DialogModule,CalendarModule, DropdownModule} from 'primeng/primeng';
import {SidebarModule} from 'primeng/sidebar';
import {GrowlModule} from 'primeng/growl';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScheduleModule} from 'primeng/schedule';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
@NgModule({
  declarations: [
  ],
  imports: [
    ButtonModule,
    StepsModule,
    InputMaskModule,
    DialogModule,
    SidebarModule,
    ProgressSpinnerModule,
    GrowlModule,
    AutoCompleteModule, 
    ScheduleModule, 
    CalendarModule, 
    DropdownModule
  ],
  exports: [
    ButtonModule,
    StepsModule,
    InputMaskModule,
    DialogModule,
    SidebarModule,
    ProgressSpinnerModule,
    GrowlModule,
    AutoCompleteModule, 
    ScheduleModule, 
    CalendarModule, 
    DropdownModule
  ],

})
export class SharedPrimeNgModule { }
