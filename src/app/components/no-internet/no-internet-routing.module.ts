import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoInternetComponent } from './no-internet.component';

const routes: Routes = [{ path: '', component: NoInternetComponent }];

@NgModule({
  imports: [], //[RouterModule.forChild(routes)]
})
export class NoInternetRoutingModule {}
