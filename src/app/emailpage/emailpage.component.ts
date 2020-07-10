import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup ,Validators, FormControl, FormBuilder } from '@angular/forms';
import {QuizService} from '../quiz/quiz.service'
import { Results } from '../results'

@Component({
  selector: 'app-emailpage',
  templateUrl: './emailpage.component.html',
  styleUrls: ['./emailpage.component.css']
})
export class EmailpageComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  error: string;
  results: Results[];

  @Output() 
  onBack: EventEmitter<any> = new EventEmitter();
  @Output()
  onSubmit: EventEmitter<string> = new EventEmitter();

  constructor(private service: QuizService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.email]]
    })
  }

  get f() { return this.registerForm.controls; }

  Back(): void {
    this.onBack.emit();
    
}

  Submit(): void{
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }

    //console.log(JSON.stringify(this.registerForm.value, null, 4))
    this.onSubmit.emit(this.registerForm.value)
    this.PostEmail(this.registerForm.value)
  }

  PostEmail(email) {
    this.service.postData(email).subscribe((data: any) => { 
    console.log(data.id);
    let userId = data.id;
    this.PostAnswers(this.registerForm.value.answers, userId)
  })
  }

  PostAnswers(answers, userId){
    return this.service.postData2(answers, userId).subscribe();
  }

}
