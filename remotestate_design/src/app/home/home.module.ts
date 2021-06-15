import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { homecomponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

export const ROUTES: Routes = [
  {path: '', component: homecomponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    homecomponent
  ],
  exports: [
    homecomponent
  ]
})


export class homeModule { }