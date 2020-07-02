import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pincode-add',
  templateUrl: './pincode-add.component.html',
  styleUrls: ['./pincode-add.component.scss']
})
export class PincodeAddComponent implements OnInit {
  transporticForm: FormGroup
 
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.transporticForm = this.fb.group({
      // name : new FormControl('', Validators.required),
      pincode:'',
      password: ''
    })
  }

}
