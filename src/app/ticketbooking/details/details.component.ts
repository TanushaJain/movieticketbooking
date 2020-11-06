import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  person={
    firstName:"abc",
    lastName:"abc",
    phone:123,
    email:"abc@abc.com",
    line1:"1",
    line2:"abc",
    city:"abc",
    state:"abc",
    zip:123465,
    country:"abc"
  }
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone:['', Validators.required],
      email:['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      line1: ['', Validators.required],
      line2:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',[
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6)
      ]],
      country:['',Validators.required]
    });
  }
  getContactDetails()
  {
    this.person.firstName=this.firstFormGroup.get('firstName').value;
    this.person.lastName=this.firstFormGroup.get('lastName').value;
    this.person.phone=this.firstFormGroup.get('phone').value;
    this.person.email=this.firstFormGroup.get('email').value;
  }
  getShippingDetails()
  {
    this.person.line1=this.secondFormGroup.get('line1').value;
    this.person.line2=this.secondFormGroup.get('line2').value;
    this.person.city=this.secondFormGroup.get('city').value;
    this.person.state=this.secondFormGroup.get('state').value;
    this.person.zip=this.secondFormGroup.get('zip').value;
    this.person.country=this.secondFormGroup.get('country').value;
  }
}
