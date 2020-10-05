import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() parentValue: string;
  @Output() onChanged = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    console.log('child comp0 ' + this.parentValue);
  }

  myClick(val: string) {
    console.log("child comp event", val);
    this.onChanged.emit(val);
  }
}
