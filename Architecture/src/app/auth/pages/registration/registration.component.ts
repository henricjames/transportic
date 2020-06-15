

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
  isActiveEmail: boolean = false
  isActive: boolean = false
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
    })
    this.transporticFormInfo.valueChanges.subscribe(console.log);
  }
  formValidate(){
    alert('closed')
  }
  onSubmit(form: FormGroup) {
    this.openedBool = !this.openedBool    
    this.isActiveInfo = !this.isActiveInfo;

    // console.log(this.openedBool, 'Name', this.transporticFormInfo.value);
  }
  clickInfo(){
    this.openedBool = !this.openedBool    
    this.isActiveInfo = !this.isActiveInfo;
    this.isActiveAccount = !this.isActiveAccount;
    // this.transporticFormInfo.reset()
  }
  clickEmail(){
    this.isActiveAccount = !this.isActiveAccount;
    this.isActive = !this.isActive;    
  }
  clickComplete(){
    console.log('Completed')
    this.isActive = !this.isActive;        
    this.isActiveAccount = !this.isActiveAccount;    
  }
}
