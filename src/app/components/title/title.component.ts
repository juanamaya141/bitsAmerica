import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  private title = '';
  constructor() {
    this.title = 'New Releases';
   }

  ngOnInit() {
  }

}
