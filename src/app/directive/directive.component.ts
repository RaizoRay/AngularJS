import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
