import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-extension-panel',
  templateUrl: './extension-panel.component.html',
  styleUrls: ['./extension-panel.component.css']
})
export class ExtensionPanelComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  meetup = ['10:00','11:00','12:00','13:00','14:00','15:00','16:00', '17:00'];
  events:string[] =  [];
  advertise = ['Blog', 'Facebook','Friends','Newspaper'];
  panelOpenState: boolean = false;
  dispdata : string [] =[];
  name = "";
  fname = "";
  lname="";
  lastname="";
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value}`);
    this.dispdata=this.events;
  
  }
  constructor() { }

  ngOnInit() {
  }
  onsubmitdata(){
    console.log(this.events);
    this.panelOpenState = false; 
  }

  onpersonalDara(){
    this.name = this.fname;
    this.lastname=this.lname;
    console.log(this.lname);
  }
}
