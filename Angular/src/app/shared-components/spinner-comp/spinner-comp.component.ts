import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-comp',
  templateUrl: './spinner-comp.component.html',
  styleUrls: ['./spinner-comp.component.scss']
})
export class SpinnerCompComponent implements OnInit {
  @Input() show:boolean
  constructor() { }
  ngOnInit(): void {
  }

}
