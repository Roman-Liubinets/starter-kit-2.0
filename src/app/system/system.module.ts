import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  imports: [SystemRoutingModule, CommonModule, MaterialModule, MainPageModule],
  declarations: [SystemComponent, HeaderComponent, FooterComponent],
})
export class SystemModule {}
