import { Component, OnInit } from '@angular/core';
import { Address } from '../../interfaces/IAddress';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {;

  name:string;
  email:string
  age:number;
  address:Address;
  hobbies:string[];

  constructor() { }

  ngOnInit() {
  this.name = "Ron Mizrachi";
  this.age =17;
  this.email = "ronmiz770@gmail.com"
  this.address = {
      street :'77o Estern park way Brookline ',
      city   :'New York',
      state  : "NY"
    }
    this.hobbies =['play piano','write music','sing']
  }

  onClick(){
    console.log('hi the butto was clicked');
    this.name = 'Ron Mizrachi';
   // this.hobbies.push('new hobbe');
  }
  addHobbe(hobby){
    console.log(hobby);
    //this.name = 'Ron Mizrachi';
    this.hobbies.push(hobby);
    return false;
  }
  deleteHobby(hobby){
    console.log(hobby);
    for(let i = 0; i<this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
}

// interface Address{
//   street:string;
//   city:string;
//   state:string;
// }
