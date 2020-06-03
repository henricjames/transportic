import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  transporticForm:FormGroup;
 constructor (private fb:FormBuilder){
 }
  ngOnInit(): void {
    this.transporticForm=this.fb.group({
      name:'amritha'
    })
    this.transporticForm.valueChanges.subscribe(console.log);
  }
}
