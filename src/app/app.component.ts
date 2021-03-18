import { Component,OnInit } from '@angular/core';

//LOCATION IS IMPORTED FOR DERIVING THE PATH OF URL, WHICH WILL BE USED TO SET THE ACTIVE TAB ON THE LEFT SIDE BAR
import { Location } from '@angular/common';
import {environment} from '../environments/environment'

const {sidebarwidth} = environment;

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
   title = 'grdb-dashboard';

   //VARIABLES TO STORE THE URL PATH AND HANDLE STYLE CHANGES ON THE LEFT SIDE BAR ACCORDINGLY
   dashboard:Boolean = false;
   reports:Boolean = false;
   settings:Boolean = false;
   path:string = null;
  
   //FUNCTION TO HANDLE CLASS CHANGES FOR SIDE BAR BASED ON NAVIGATION, TO HANDLE STYLE OF LEFT SIDE BAR BASED ON WHICH PAGE IS ACTIVE
   changeSideNavigationClasses(){
    this.path = this.location.path().split('/')[1];
    switch(this.path)
    {
      case 'reports':
        this.reports = true;
        this.dashboard = false;
        break;
      case 'dashboard':
        this.dashboard = true;
        this.reports = false;
        break;
    }
  }

    //FUNCTION TO SET THE WIDTH OF THE LEFT SIDE BAR WHEN IT IS OPENED
    openNav() {
      $("#mySidebar").width(sidebarwidth);
      $("#main").width(sidebarwidth);
    }
    
    //FUNCTION TO SET THE WIDTH OF THE LEFT SIDE BAR WHEN IT IS CLOSED
      closeNav() {
      $("#mySidebar").width(0);
      $("#main").width(0);
    }

    //LOCATION IS IMPORTED FOR DERIVING THE PATH OF URL
    constructor(private location: Location) { }

    ngOnInit(): void {
      this.changeSideNavigationClasses();
    }
}
