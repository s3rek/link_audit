import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.css']
})
export class EndscreenComponent implements OnInit {

  @Input() Results: Object;
  sumpoints: number;
  summaxpoints: number;
  Responsetext: string;
  

  constructor() { }
  

  ngOnInit(): void {
    this.sumpoints = this.Results['sumpoints'];
    this.summaxpoints = this.Results['summaxpoints'];
    this.Responsetext=this.CalcResponse(this.summaxpoints, this.sumpoints);
  }

  CalcResponse(maxpoints, points):string{
    if(Math.round(points/maxpoints) * 100 > 80){
      return "Gratulujemy wysokiego wyniku!"
    }
    else{
      return "Widać potencjał w Twoich działaniach, ale przed Tobą jeszcze sporo pracy, zanim Twoje konto na LinkedIn zacznie pracować na Twój sukces."
    }
  }



}
