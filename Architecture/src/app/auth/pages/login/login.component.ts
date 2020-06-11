import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  transporticForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  label = 'button label';

  ngOnInit(): void {
    this.transporticForm = this.fb.group({
      name: '',
      //name: ['', Validators.required],
      password: ''
    })
    this.transporticForm.valueChanges.subscribe(console.log);
  }


  buttonClick() {
    console.log('button clicked');
  }

}
