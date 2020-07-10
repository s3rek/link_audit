import { Component, OnInit, Input } from '@angular/core';
import {QuizComponent} from '../quiz/quiz.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-descr',
  templateUrl: './descr.component.html',
  styleUrls: ['./descr.component.css']
})
export class DescrComponent implements OnInit {

@Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
