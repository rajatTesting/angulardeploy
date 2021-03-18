import { Component, Input, OnInit, Inject } from '@angular/core';
import {environment} from '../../../environments/environment'

//MODULE TO EXPORT REPORT DATA AS CSV OR PDF
import { ExportToCsv } from 'export-to-csv';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-reports-board',
  templateUrl: './reports-board.component.html',
  styleUrls: ['./reports-board.component.sass']
})
export class ReportsBoardComponent implements OnInit {

  //TO HANDLE DISPLAYING ALL THE REPORTS AND A PARTICULAR REPORT.
  //reportsList = false   =>     DISPLAY LIST OF REPORTS AVAILABLE
  //reportsList = true   =>     DISPLAY A PARTICULAR LIST
  reportsList:Boolean = false;

  //TITLE STORES THE TITLE OF THE REPORT OPENED BY THE USER
  title:String = 'file';

  //TO TOGGLE THE DISPLAYING OF A REPORT OR THE LIST OF AVAILABLE REPORTS.
  displayReport(type){
    this.reportsList = !this.reportsList;
    environment.reports.forEach((reportType) => {
      if(reportType.type === type)
      {
        this.title = reportType.title;
      }
    });
  }

  //THIS VARIABLE CONTAINS THE DATA AND WILL ALSO BE USED TO EXPORT THE SAME TO CSV
  data = [
    {
      name: 'Test 1',
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];
   
  //CONFIGURE OPTIONS TO EXPORT TO CSV
  //CAN'T BE MOVED TO ENVIRONMENT VARIABLES, AS THE TITLE IS DYNAMIC AND USING THE 'TITLE' VARIABLE OF THIS COMPONENT.
  options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: `${this.title} + _report`,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  
  
  //DATA FOR THE REPORT
  //STORES THE COLUMN NAMES
  //WILL BE FETCHED AND POPULTED FROM THE API. HARDCODED FOR NOW.
  headElements = [ 
    "Customer Name",
    "Office Code",
    "RateFormat",
    "RateType",
    "FileName",
    "FileSize",
    "Exception_Found",
    "Partially_Insert",
    "Inserted",
    "Upload_On",
    "Process_Start_Time",
    "Process_End_Time",
    "Uploaded_By",
    "Download Errors"];
    
    //STORES THE DATA ROW WISE.
    //WILL BE FETCHED AND POPULTED FROM THE API. HARDCODED FOR NOW.
    elements: any = [
      {
        id: 1, heading1: 'Cell',
        heading2: 'Cell',
        heading3: 'Cell',
        heading4: 'Cell',
        heading5: 'Cell',
        heading6: 'Cell',
        heading7: 'Cell',
        heading8: 'Cell',
        heading9: 'Cell',
        heading10: 'Cell',
        heading11: 'Cell',
        heading12: 'Cell',
        heading13: 'Cell',
      },
      {
        id: 2, heading1: 'Cell',
        heading2: 'Cell',
        heading3: 'Cell',
        heading4: 'Cell',
        heading5: 'Cell',
        heading6: 'Cell',
        heading7: 'Cell',
        heading8: 'Cell',
        heading9: 'Cell',
        heading10: 'Cell',
        heading11: 'Cell',
        heading12: 'Cell',
        heading13: 'Cell',
      },
      {
        id: 3, heading1: 'Cell',
        heading2: 'Cell',
        heading3: 'Cell',
        heading4: 'Cell',
        heading5: 'Cell',
        heading6: 'Cell',
        heading7: 'Cell',
        heading8: 'Cell',
        heading9: 'Cell',
        heading10: 'Cell',
        heading11: 'Cell',
        heading12: 'Cell',
        heading13: 'Cell',
      },
    ];

  //FUNCTION TO BE ENVOKED TO GENERATE THE CSV FILE 
  exportcsv(){
    var csvExporter = new ExportToCsv(this.options);

    //PASS THE FILE DATA TO SAVE THE FILE AS CSSV
    csvExporter.generateCsv(this.data);
  }

  //FUNCTION TO BE EVOKED TO GENERATE THE PDF FILE
  exportpdf(){

    //PAGE CONFIGURATION FOR THE EXPORTED PDF FILE
    const {pdfconfigure} = environment;
    const {page, metrics, size} = pdfconfigure;
    var doc = new jsPDF('p', 'mm', 'a0');
    
    // Or use javascript directly:
    autoTable(doc, {

      //THIS DATA WILL ALSO COME FROM API. HARDCODED FOR NOW.
      head: [['Name', 'Email', 'Country','Name', 'Email', 'Country','Name', 'Email', 'Country','Name', 'Email', 'Country','Name', 'Email', 'Country',]],
      body: [
        ['David', 'david@example.com', 'Sweden','David', 'david@example.com', 'Sweden','David', 'david@example.com', 'Sweden','David', 'david@example.com', 'Sweden','David', 'david@example.com', 'Sweden',],
        ['Castille', 'castille@example.com', 'Spain','Castille', 'castille@example.com', 'Spain','Castille', 'castille@example.com', 'Spain','Castille', 'castille@example.com', 'Spain','Castille', 'castille@example.com', 'Spain',],
        // ...
      ],
    })

    //PASS THE FILE NAME TO SAVE THE FILE AS PDF
    doc.save(`${this.title}_report.pdf`)
  }
  
  constructor() {
   }

  ngOnInit(): void {
    this.reportsList = false;
  }

}
