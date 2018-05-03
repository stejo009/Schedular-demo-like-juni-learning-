import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css']
})
export class AppointComponent implements OnInit {
  panelOpenState: boolean = false;
  selectedValue: string;

  Timezone = [
    { value:	'Bosnia', viewValue:'Bosnia UTC +02:00' },	
    { value:	'Botswana',	viewValue:'Botswana UTC +02:00'},	
    { value:	'Brazil',		viewValue:'Brazil	UTC -03:00'},
    { value:	'Brazil',		viewValue:'Brazil UTC-03:00'},
    { value:	'British Indian Ocean Territory',	viewValue:'British UTC -06:00'},
    { value:	'Cambodia',	viewValue:'Cambodia UTC -07:00'},
    { value:	'Canada',	viewValue:'Canada UTC -05:00'},
    { value:	'China',	viewValue:'China UTC -06:00'},
    { value:	'Egypt',	viewValue:'Egypt UTC -02:00'},
    { value:	'France',	viewValue:'France UTC -02:00'},
    { value:	'Germany',	viewValue:'Germany UTC -02:00'},
    { value:	'India',	viewValue:'India UTC -05:30'}
     
  ];

  constructor() { }

  ngOnInit() {
  }

}
