import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.css']
})
export class Component5Component implements OnInit {

  @Input() childMessage: any;
  constructor() { }

  ngOnInit() {
  }

}
