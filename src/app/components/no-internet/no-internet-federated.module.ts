import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NoInternetRoutingModule } from "./no-internet.module";

@NgModule({
  imports: [CommonModule, NoInternetRoutingModule],
  exports: [],
})
export class NoInternetFederatedModule {}
