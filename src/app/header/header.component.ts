import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  project_name = 'AngularJS 2';
  constructor() { }

  ngOnInit() {
  }

}
