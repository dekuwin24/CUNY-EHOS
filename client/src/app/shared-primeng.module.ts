import {NgModule} from '@angular/core';
import {ButtonModule,StepsModule,InputMaskModule, DialogModule } from 'primeng/primeng';
@NgModule({
  declarations: [
  ],
  imports: [
    ButtonModule,
    StepsModule,
    InputMaskModule,
    DialogModule
  ],
  exports: [
    ButtonModule,
    StepsModule,
    InputMaskModule,
    DialogModule
  ],

})
export class SharedPrimeNgModule { }
