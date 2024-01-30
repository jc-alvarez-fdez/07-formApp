import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/sideMenu/sideMenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SideMenuComponent,
    RouterModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
