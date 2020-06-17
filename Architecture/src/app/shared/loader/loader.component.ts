import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  show: boolean = false
  public text: string = 'View loader';
  constructor() { }

  ngOnInit(): void {
  }
  showSpinner(){
    this.show=true;
    this.text="Hide loader"
  }
}
