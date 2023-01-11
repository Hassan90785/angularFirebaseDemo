import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './view-layer/home/home.component';
import {MessagesComponent} from './view-layer/messages/messages.component';
import {HomeSmartComponent} from './smart-layer/home-smart/home-smart.component';
import {MessagesSmartComponent} from './smart-layer/messages-smart/messages-smart.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {reducers} from "./data-layer/reducers";
import {MessagesEffects} from "./data-layer/effects/messages.effects";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    HomeSmartComponent,
    MessagesSmartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([MessagesEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
