import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appoint',
  templateUrl: './appoint.component.html',
  styleUrls: ['./appoint.component.css']
})
export class AppointComponent implements OnInit {
  panelOpenState: boolean = false;
  selectedValue: string;
  sortedTimeZone:any = [];
  NewTimezone=[];
  Fdata=[];
  sortdata = [];
  Finaldata = [];
  MondayData=[];
  TuesdayData=[];
  WednesdayData=[];
  ThursdayData=[];
  FridayData=[];
  SaturdayData=[];
  NewMondayData=[];
  NewTuesdayData=[];
  NewWednesdayData=[];
  NewThursdayData=[];
  NewFridayData=[];
  NewSaturdayData=[];
 

  constructor(private http: HttpClient){
    this.http.get('http://localhost:3000/Timezone').subscribe((data) => {
      let json:any = data;
      this.NewTimezone = json;
      // console.log("Dynamic Data:"+this.NewTimezone);
      });
    }

  ngOnInit() {
   
    
  }

  public selectedTimezon() {
    this.sortedTimeZone = [];
   
      for(let i = 0; i < Object.keys(this.NewTimezone).length; i++) {
        let TimezoneData:any = this.NewTimezone[i];

        if(TimezoneData.value == this.selectedValue) {
          this.sortedTimeZone.push(TimezoneData);
        } 
      }

      for(let i = 0; i<Object.keys(this.sortedTimeZone).length; i++){
        let alldata = this.sortedTimeZone[i];
        
        this.Fdata.push(alldata.Sunday);
        this.MondayData.push(alldata.Monday);
        console.log("All data step by step " + alldata.monday);
        this.TuesdayData.push(alldata.Tuesday);
        this.WednesdayData.push(alldata.Wednesday);
        this.ThursdayData.push(alldata.Thursday);
        this.FridayData.push(alldata.Friday);
        this.SaturdayData.push(alldata.Saturday);
        
      }

      for(let i = 0; i<Object.keys(this.Fdata || this.MondayData ||this.TuesdayData ||this.WednesdayData || this.ThursdayData|| this.FridayData || this.SaturdayData).length; i++){
        this.Finaldata= this.Fdata[i];
        this.NewMondayData=this.MondayData[i];
        this.NewTuesdayData = this.TuesdayData[i];
        this.NewWednesdayData=this.WednesdayData[i];
        this.NewFridayData = this.FridayData[i];
        this.NewThursdayData = this.ThursdayData[i];
        console.log("Monday data:"+this.NewMondayData);
        this.NewSaturdayData=this.SaturdayData[i];
      }
      console.log(this.Fdata);
  
      }
      
      TimezonSelect(){
        alert("Testing");
      }


}
