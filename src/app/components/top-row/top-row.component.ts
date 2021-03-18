import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' 

@Component({
  selector: 'app-top-row',
  templateUrl: './top-row.component.html',
  styleUrls: ['./top-row.component.sass']
})
export class TopRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //FUNCTION TO DYNAMICALLY HANDLE THE CHECK AND UNCHECK OF RADIO BUTTONS
  handleClick()
  {
    $('#1').attr('checked', true);
  }


}
