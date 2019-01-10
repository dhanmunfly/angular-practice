import { Component, OnInit , EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  @Output() valueChange = new EventEmitter();
    counter = 0;
    constructor() { }

    ngOnInit() {
    }

    valueChanged() { // You can give any function name

        this.counter = this.counter + 1;
        this.valueChange.emit(this.counter);
    }





}
