import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
// import { SystemRoutingModule } from './system-routing.module';
// import { SystemComponent } from './system.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { AddDialogComponent } from '../main-page/dialogs/add-dialog/add-dialog.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [MainPageComponent, AddDialogComponent],
  entryComponents: [AddDialogComponent],
})
export class MainPageModule {}
