import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';

//引入底部模块，根据路由选择不同的子组件
import {FooterComponent} from './footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ],
  //外部暴露组件
  exports:[FooterComponent]
})
export class FooterModule { }
