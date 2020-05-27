import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() fullWidth = false;
  @Input() outline = false;
  @Input() disabled = false;
  @Input() rounded = false;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
