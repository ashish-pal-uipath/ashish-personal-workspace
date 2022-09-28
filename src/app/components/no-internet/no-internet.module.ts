import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NoInternetRoutingModule } from './no-internet-routing.module';
import { NoInternetComponent } from './no-internet.component';

@NgModule({
  declarations: [NoInternetComponent],
  imports: [CommonModule, NoInternetRoutingModule],
  exports: [NoInternetComponent],
})
export class NoInternetModule {}
