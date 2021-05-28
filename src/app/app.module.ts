import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'data', component: DataTableComponent, }
];

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    HeaderComponent,
    TableComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    CdkTableModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
