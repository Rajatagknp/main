import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { leavecomponent } from "./leave.component";
import { firstpagecomponent } from "./pages/1.component";
import { secondpagecomponent } from "./pages/2.compoent";
import { thirdpagecomponent } from "./pages/3.component";
import { fourthpagecomponent } from "./pages/4.component";
import { fifthpagecomponent } from "./pages/5.component";
import { sixpagecomponent } from "./pages/6.component";
import { sevenpagecomponent } from "./pages/7.component";
import { eigthpagecomponent } from "./pages/8.component";
import { ninepagecomponent } from "./pages/9.component";
import { tenpagecomponent } from "./pages/10.component";
import { elevenpagecomponent } from "./pages/11.component";
import { thirteenpagecomponent } from "./pages/13.component";
import { fourteenpagecomponent } from "./pages/14.component";
import { twelvepagecomponent } from "./pages/12.component";

export const ROUTES: Routes = [
  {path: '', component: leavecomponent},
  {path: 'first_page', component: firstpagecomponent},
  {path: 'second_page', component: secondpagecomponent},
  {path: 'third_page', component: thirdpagecomponent},
  {path: 'fourth_page', component: fourthpagecomponent},
  {path: 'fifth_page', component: fifthpagecomponent},
  {path: 'six_page', component: sixpagecomponent},
  {path: 'seven_page', component: sevenpagecomponent},
  {path: 'eigth_page', component: eigthpagecomponent},
  {path: 'nine_page', component: ninepagecomponent},
  {path: 'ten_page', component: tenpagecomponent},
  {path: 'eleven_page', component: elevenpagecomponent},
  {path: 'twelve_page', component: twelvepagecomponent},
  {path: 'thirteen_page', component: thirteenpagecomponent},
  {path: 'fourteen_page', component: fourteenpagecomponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    leavecomponent,
    firstpagecomponent,
    secondpagecomponent,
    thirdpagecomponent,
    fourthpagecomponent,
    fifthpagecomponent,
    sixpagecomponent,
    sevenpagecomponent,
    eigthpagecomponent,
    ninepagecomponent,
    tenpagecomponent,
    elevenpagecomponent,
    twelvepagecomponent,
    thirteenpagecomponent,
    fourteenpagecomponent
  ],
  exports: [
    leavecomponent
  ]
})


export class leaveModule { }