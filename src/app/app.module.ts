import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './store/app.reducers';
import { AuthService } from './auth/services/auth.service';
import { SessionService } from './auth/services/session.service';
import { SystemModule } from './system/system.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SystemModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    TooltipModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
  providers: [AuthService, SessionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
