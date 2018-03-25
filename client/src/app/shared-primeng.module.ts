import {NgModule} from '@angular/core';
import {ButtonModule,StepsModule,InputMaskModule } from 'primeng/primeng';
import {DialogModule} from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import {GrowlModule} from 'primeng/growl';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
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
  ],
  exports: [
    ButtonModule,
    StepsModule,
    InputMaskModule,
    DialogModule,
    SidebarModule,
    ProgressSpinnerModule,
    GrowlModule,
  ],

})
export class SharedPrimeNgModule { }
