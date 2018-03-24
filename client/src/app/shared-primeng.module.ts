import {NgModule} from '@angular/core';
import {ButtonModule,StepsModule,InputMaskModule,  } from 'primeng/primeng';
import {SidebarModule} from 'primeng/sidebar';
import {GrowlModule} from 'primeng/growl';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AutoCompleteModule, DialogModule,CalendarModule, DropdownModule} from 'primeng/primeng';
import { ScheduleModule } from 'primeng/components/schedule/schedule';
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
