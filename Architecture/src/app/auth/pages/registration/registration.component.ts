

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  transporticForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('it worked')
    this.transporticForm = this.fb.group({
      name: '',
      //name: ['', Validators.required],
      email: '',
      message: ''
    })
    this.transporticForm.valueChanges.subscribe(console.log);
  }
  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Name', form.value.name);
  }

}
