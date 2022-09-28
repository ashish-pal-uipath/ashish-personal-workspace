import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NoInternetComponent } from "./no-internet.component";

@NgModule({
  declarations: [NoInternetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: NoInternetComponent,
      },
    ]),
  ],
  exports: [NoInternetComponent],
})
export class NoInternetRoutingModule {}

@NgModule({ imports: [NoInternetRoutingModule] })
export class NoInternetModule {}
