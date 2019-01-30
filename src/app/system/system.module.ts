import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [SystemRoutingModule, CommonModule],
  declarations: [SystemComponent, MainPageComponent, HeaderComponent, FooterComponent],
})
export class SystemModule {}
