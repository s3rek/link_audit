import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ModalComponent } from './modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { DescrComponent } from './descr/descr.component';
import { EndscreenComponent } from './endscreen/endscreen.component';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { StartscreenComponent } from './startscreen/startscreen.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ModalComponent,
    FooterComponent,
    DescrComponent,
    EndscreenComponent,
    EmailpageComponent,
    StartscreenComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
