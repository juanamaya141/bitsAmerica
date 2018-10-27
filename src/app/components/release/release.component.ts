import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent {
  @Input() release:any = {};
  constructor() { }
}
