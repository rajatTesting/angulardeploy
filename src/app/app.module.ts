// ANGULAR INBUILT COMPONENTS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// COMPONENTS CREATED FOR THIS APP
import { TopRowComponent } from './components/top-row/top-row.component';
import { MidRowComponent } from './components/mid-row/mid-row.component';
import { LastRowComponent } from './components/last-row/last-row.component';
import { WhiteBoxesComponent } from './components/white-boxes/white-boxes.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { ReportsBoardComponent } from './components/reports-board/reports-board.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// COMPONENTS FOR CHARTS AND DATE PICKER
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

//MODULE TO EXPORT FILES AS CSV OR PDF FROM THE REPORTS PAGE
import { ExportToCsv } from 'export-to-csv';

@NgModule({
  declarations: [
    AppComponent,
    TopRowComponent,
    MidRowComponent,
    LastRowComponent,
    WhiteBoxesComponent,
    GraphsComponent,
    ReportsBoardComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ChartsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
