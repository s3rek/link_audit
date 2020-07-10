import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css']
})
export class StartscreenComponent implements OnInit {

  constructor() { }

  @Output() onStart: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  Start(){
    this.onStart.emit()
  }

}
