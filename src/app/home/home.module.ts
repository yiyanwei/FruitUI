import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SidebarPageModule } from '../modules/sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidebarPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: 'productlist/:id',
            loadChildren: () => import('../modules/productlist/productlist.module').then(m => m.ProductlistPageModule)
          }
        ]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
