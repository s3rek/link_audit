import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() tip = `Jedziemy dalej!`;


  constructor(
    public activeModal: NgbActiveModal,
  ) {  }

  ngOnInit() {
  
  }

}