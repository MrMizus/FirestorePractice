import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {ProductListComponentModule} from "./components/product-list/product-list.component-module";
import {ProductFormComponentModule} from "./components/product-form/product-form.component-module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        ProductListComponentModule,
        ProductFormComponentModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
