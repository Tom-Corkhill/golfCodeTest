import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'data', component: TableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
