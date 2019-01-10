import { Component, OnInit } from '@angular/core';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-component3-list',
  templateUrl: './component3-list.component.html',
  styleUrls: ['./component3-list.component.css']
})
export class Component3ListComponent implements OnInit {

  message:string;

  constructor(private data: SharedserviceService) {}

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
