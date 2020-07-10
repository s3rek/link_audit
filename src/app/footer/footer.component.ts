import { Component, OnInit } from '@angular/core';
import {faFacebookSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faFacebookSquare = faFacebookSquare;

  constructor() { }

  ngOnInit(): void {
  }

}
