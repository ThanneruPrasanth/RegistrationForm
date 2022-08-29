import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {


title="Please Enter the Below Details"
  formDetails ={
    name :"",
    parentname :"",
    age :0,
    DOB :"",
    qulification :"",
    email : ""
}

save(){
  console.log(this.formDetails.name+" "+
  this.formDetails.parentname+" "+
  this.formDetails.age+" "+this.formDetails.DOB+" "+
  this.formDetails.qulification+" "+this.formDetails.email);
}


  constructor() { }

  ngOnInit(): void {
  }

}
