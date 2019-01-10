import { Component, OnInit } from '@angular/core';
import { PERSON } from '../personlist';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrls: ['./looping.component.css']
})
export class LoopingComponent implements OnInit {

  persons = PERSON;
  constructor() { }

  ngOnInit() {
  }

}
