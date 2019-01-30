import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../material.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { AddDialogComponent } from '../main-page/dialogs/add-dialog/add-dialog.component';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [MainPageComponent, AddDialogComponent],
  entryComponents: [AddDialogComponent],
})
export class MainPageModule {}
