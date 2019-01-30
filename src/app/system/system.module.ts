import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  imports: [SystemRoutingModule, CommonModule],
  declarations: [SystemComponent, MainPageComponent],
})
export class SystemModule {}
