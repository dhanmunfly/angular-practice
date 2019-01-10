import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  message: string;


  constructor(private data: SharedserviceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  addtext(msg: string) {
    this.data.changeMessage(msg);
  }
}