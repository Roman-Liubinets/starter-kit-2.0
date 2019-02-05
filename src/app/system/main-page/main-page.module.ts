import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { MaterialModule } from '../../material.module';
import { MainPageComponent } from '../main-page/main-page.component';
import { AddEditDialogComponent } from '../main-page/dialogs/add-edit-dialog/add-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('main page', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [MainPageComponent, AddEditDialogComponent],
  entryComponents: [AddEditDialogComponent],
})
export class MainPageModule {}
