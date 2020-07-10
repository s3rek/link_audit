import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl} from '@angular/forms'

import { Question } from './question'
import { Answer } from '../answer'
import { Results } from '../results'
import { ModalComponent } from '../modal/modal.component'
import { from } from 'rxjs';
import { max } from 'rxjs/operators';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  providers: [QuizService],
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz: Question[];
  index: number = -1;
  Answer: Answer;
  Results: Results;
  ArrayAnswqst = [];
  actualAnswer: string;
  endScreen: string = 'start';
  useremail: string;
  optionselected = false;
  submitted=false;

  constructor(private service: QuizService,
    private NgbmodalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.GetQuiz()
  }

  GetQuiz() {
    this.service.getData()
      .subscribe(data => {
        this.quiz = data
      });
  }

  open(option: any, qstoptions) {
    const modalRef = this.NgbmodalService.open(ModalComponent);
    modalRef.componentInstance.tip = option.tip;
    modalRef.result.then(() => { this.onSelect(option, qstoptions); this.Next() }, () => { this.onSelect(option, qstoptions);this.submitted=false; })
  }

  get filteredQuestions() {
    return (this.quiz) ?
      this.quiz.slice(this.index, this.index + 1) : [];
  }

  CalcMaxpoints(qstoptions) {
    let maxpoints = qstoptions.map(a => a.points);
    return maxpoints = Math.max.apply(Math, maxpoints);
  }

  onSelect(option: any, qstoptions: any) {
    this.Answer = { questionid: this.index, answerid: option.optionid, maxpoints: this.CalcMaxpoints(qstoptions), points: option.points, answer: option.option };
    this.ArrayAnswqst.forEach(element => {
      if (element.questionid === this.Answer.questionid) {
        this.ArrayAnswqst = this.ArrayAnswqst.filter(e => (e !== element))
      }
    })
    this.ArrayAnswqst.push(this.Answer)
    console.log(this.ArrayAnswqst)
  }

  SendEmail(email: string) {
    this.useremail = email;
    console.log(this.useremail)
  }

  goTo(index: number) {
    if (index >= 0) {
      this.index = index;
    }
  }

  Back() {
    this.goTo(this.index - 1)
    this.submitted=false
    this.CheckWindowType()
  }

  Next() {
    this.goTo(this.index + 1)
    this.submitted=false
    this.CheckWindowType()
  }

  get LoadAnswers() {
    this.ArrayAnswqst.forEach(e => {
      if (e.questionid === this.index) {
        this.actualAnswer = e.answer;
      }
    });
    return this.actualAnswer
  }

  SumPoints(key) {
    return this.ArrayAnswqst.reduce((a, b) => a + (b[key] || 0), 0);
  }

  SubmitResults(email) {
    const SumPoints = { sumpoints: this.SumPoints("points") };
    const SumMaxPoints = { summaxpoints: this.SumPoints("maxpoints") }
    const Answers = { answers: this.ArrayAnswqst };
    this.Results = Object.assign(email, Answers, SumPoints, SumMaxPoints);
    console.log(this.Results);
  }

  SubmitForm() {
    this.optionselected = false;
    console.log(this.index)
    this.ArrayAnswqst.forEach(e => {
      if (e.questionid === this.index) {
        this.optionselected = true;
      }
    });
    if (this.optionselected) {
      this.Next()
    } else {
      this.submitted = true;
      return
    }
  }

  CheckWindowType() {
    if (this.index === this.quiz.length + 1) {
      this.endScreen = 'end';
    }
    else if (this.index === this.quiz.length) {
      this.endScreen = 'preend'
    }
    else if (this.index > -1 && this.index < this.quiz.length) {
      this.endScreen = 'false';
    }
  }


}
