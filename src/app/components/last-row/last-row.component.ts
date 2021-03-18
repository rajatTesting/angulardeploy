import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-row',
  templateUrl: './last-row.component.html',
  styleUrls: ['./last-row.component.sass']
})
export class LastRowComponent implements OnInit {

  //FOR THE FIRST LIST OF FILE LOGS
  //THIS DATA WILL BE FETCHED FROM THE API, HARDCODED FOR NOW
  headElements = [ 
    "",
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
      heading13: 'Cell'
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
      heading13: 'Cell'
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
      heading13: 'Cell'
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
      heading13: 'Cell'
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
      heading13: 'Cell'
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
      heading13: 'Cell'
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
      heading13: 'Cell'
    },
  ];




  //FOR THE SECOND LIST OF ERROR LOGS
  //THIS DATA WILL BE FETCHED FROM THE API, HARDCODED FOR NOW
  headElements2 = [ "Customer Name",
  "Office Code",
  "FileName",
  "File Received Date",
  "Reason"
 ];

 elements2: any = [
  {
    id: 1, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    
  },
  {
    id: 2, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    
  },
  {
    id: 3, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    
  },
  {
    id: 3, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    
  },
  {
    id: 3, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    
  },
  {
    id: 3, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
    
  },
  {
    id: 3, heading1: 'Cell',
    heading2: 'Cell',
    heading3: 'Cell',
    heading4: 'Cell',
  },
];

  constructor() { }

  ngOnInit(): void {
  }

}
