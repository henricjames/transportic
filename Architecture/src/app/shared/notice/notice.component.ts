import { Component, OnInit } from '@angular/core';
import { Notice } from '../../../models/notice.model';
@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss'],
})
export class NoticeComponent implements OnInit {
  notices: Notice[] = [
    {
      title: 'Lorem ipsum dolar sit amet,consecter',
      description:
        'Lorem ipsum dolar sit amet consecter adiscing elit sed to eld mod tempor incidedunt ut laboretol',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
