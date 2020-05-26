import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit {
  @Input() labelname: string;

  constructor() { }

  ngOnInit(): void {
  }

}
