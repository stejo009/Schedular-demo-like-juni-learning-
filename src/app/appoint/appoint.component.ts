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
  sortedTimeZone = [];
  NewTimezone=[];


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

      }
  


}
