import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import {Question} from './question'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  ApiUrl:string = 'assets/questions.json';
  httpOptions: { headers; observe; } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    observe: 'response'
  };

  constructor( private http: HttpClient){}


    // Make the HTTP request:
    getData(): Observable<Question[]> {
      return this.http.get<Question[]>(this.ApiUrl)
  }

  postData(data) {
    const url="https://audyt.exago.pl";
    //const url="http://localhost:8080";
    console.log(data)
    return this.http.post(`${url}/create.php`, data)
    //return this.http.post(url, data, this.httpOptions)
    .pipe(
      catchError(this.handleError));
  }

  answersReduce(data, userid) {
    let values= data.reduce((o,a)=>{
      let ini=[];
      ini.push(a.questionid);
      ini.push(a.answerid);
      ini.push(userid)
      o.push(ini);
    return o}, [])
      return values
      }

  postData2(data, userid){
    //const url= "http://localhost:8080"
    const url="https://audyt.exago.pl";
    data = this.answersReduce(data, userid)
    console.log(data)
    return this.http.post(`${url}/createanswers.php`, data)
    .pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }


}
