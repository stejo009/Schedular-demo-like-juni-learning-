import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  meetup = ['10:00','11:00','12:00','13:00','14:00','15:00','16:00', '17:00'];
  advertise = ['Blog', 'Facebook','Friends','Newspaper'];
  constructor(private _formBuilder: FormBuilder) { }
  events: string[] = [];
  name:any = "";
  firstname = "";
  fname = "";
  

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value}`);
  
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

  }
  onclickdata(){

    this.firstname = this.fname;
    alert("name =" + this.firstname);
  }
  

}
