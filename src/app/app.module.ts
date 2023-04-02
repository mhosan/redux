import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment.prod';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { contadorReducer } from './contador/contador.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contador : contadorReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,  //cuantos estados se guardan en las devtools para fines de información, para logs.
      logOnly: environment.production, //restringir la extensión a log only
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
