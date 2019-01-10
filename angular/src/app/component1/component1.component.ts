import { Component, Input , OnInit , } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
 agreed = 0;
 message: string ;
 @Input()  name: string;
  constructor() { }

  ngOnInit() {
  }

  displayCounter(count) {
    console.log(count);
    this.agreed = count + 1;
}
}
