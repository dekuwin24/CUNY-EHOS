import {NgModule} from '@angular/core';
import {ButtonModule,StepsModule,InputMaskModule} from 'primeng/primeng';
@NgModule({
  declarations: [
  ],
  imports: [
    ButtonModule,
    StepsModule,
    InputMaskModule
  ],
  exports: [
    ButtonModule,
    StepsModule,
    InputMaskModule
  ],

})
export class SharedPrimeNgModule { }
