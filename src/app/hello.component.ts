import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  interval;
  

  zeitJetzt;
  zeitWeihnachten;
  zeitJetztMilli;
  zeitWeihnachtenMilli;
  zeitTage;
  zeitStunden;
  zeitMinuten;
  zeitSekunden;

  // (1970,0,1,1,0,0,0) Ursprung;

  myCallback(){  
  this.zeitJetzt= new Date();
  this.zeitWeihnachten = new Date(2019,11,24);

  this.zeitJetztMilli = this.zeitJetzt.getTime();

  this.zeitWeihnachtenMilli = this.zeitWeihnachten.getTime();
  this.zeitTage = Math.floor((this.zeitWeihnachtenMilli - this.zeitJetztMilli)/1000/60/60/24)

  this.zeitStunden = 23 - this.zeitJetzt.getHours();
  this.zeitMinuten = 60 - this.zeitJetzt.getMinutes();
  this.zeitSekunden = 60 - this.zeitJetzt.getSeconds();
  }  

  intervalID = setInterval(this.myCallback, 500);

  ngOnInit() {
    this.interval = setInterval(() => { this.myCallback(); }, 1000);
  }
}
