import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { homeModule } from './home/home.module';
import { leaveModule } from './leave_form/leave.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

export const ROUTES: Routes = [
  {
      path: 'remotestate',
      children: [
        {path: 'home',loadChildren: './home/home.module#homeModule'},
        {path: 'leave',loadChildren: './leave_form/leave.module#leaveModule'}
      ]
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    homeModule,
    leaveModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }