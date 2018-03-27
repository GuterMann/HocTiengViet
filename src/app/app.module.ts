import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { GridModule } from '@progress/kendo-angular-grid';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';

import { DictionaryModule } from './dictionary/dictionary.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DictionaryModule,
    RouterModule.forRoot(AppRoutes),
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
