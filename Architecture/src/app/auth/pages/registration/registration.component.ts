

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {  
  transporticFormInfo: FormGroup
  transporticFormAccount: FormGroup
  transporticFormEmail: FormGroup
  openedBool: boolean = false
  isActiveInfo: boolean = true
  isActiveAccount: boolean = false
  isActiveEmail: boolean = false;
  public infoStepper: boolean = true;
  public accountStepper: boolean= false;
  public emailStepper: boolean= false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('it worked')
    this.transporticFormInfo = this.fb.group({
      // name : new FormControl('', Validators.required),
      name:'',
      password: '',
      email: '',
      message: ''
    }),
    this.transporticFormAccount = this.fb.group({
      email: '',
      password:''
    }),
    this.transporticFormEmail = this.fb.group({
      email: ''
    })
    this.transporticFormInfo.valueChanges.subscribe(console.log);
  }
  formValidate(){
    alert('closed')
  }
  onSubmit(form: FormGroup) { 
    // console.log(this.openedBool, 'Name', this.transporticFormInfo.value);
  }
  clickInfo(){
      this.openedBool = !this.openedBool    
      this.isActiveInfo = !this.isActiveInfo;
      this.isActiveAccount = !this.isActiveAccount
      this.transporticFormInfo.reset(this.transporticFormInfo.value)
      console.log('Info Worked')
      this.infoStepper= !this.infoStepper;       
      this.accountStepper = true    
      this.isActiveEmail = !this.isActiveAccount
  }
  clickEmail(){    
    this.openedBool = !this.openedBool    
      // this.isActiveInfo = !this.isActiveInfo;
    this.isActiveAccount = !this.isActiveAccount
    this.isActiveEmail = !this.isActiveEmail
    this.emailStepper= !this.emailStepper;
    console.log('Email Worked')
    this.accountStepper=!this.accountStepper       
  }
  clickComplete(){
    this.transporticFormInfo.reset()
    this.openedBool = !this.openedBool
    console.log('Completed')
    this.transporticFormEmail.reset(this.transporticFormEmail.value)
    this.isActiveEmail = !this.isActiveEmail;
    this.isActiveInfo = !this.isActiveInfo;
    this.infoStepper = !this.infoStepper;
    this.emailStepper= !this.emailStepper;
  }
}
