import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  
  name: string = "";
  date: string = "";
  gender: string = "";
  phoneNumber: string = "";
  idNumber: string = "";
 

  receiveData(data:any) :void {
    console.log("Nhận dc",data);
    this.name = data.name;
    this.date = data.date;
    this.gender = data.gender;
    this.phoneNumber = data.phoneNumber;
    this.idNumber = data.idNumber;
  }
}
