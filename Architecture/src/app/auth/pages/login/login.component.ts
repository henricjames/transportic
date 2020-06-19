import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  transporticForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  label = 'button label';

  ngOnInit(): void {
    this.transporticForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
     // email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    
    })
    this.transporticForm.valueChanges.subscribe(console.log);
  }
  get transporticFormControl() { return this.transporticForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.transporticForm.invalid){
        return;
    }

    alert('SUCCESS!! :-)')
  }
  
  buttonClick() {
    console.log('button clicked');
  }
}
