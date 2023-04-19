import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'consumoEnergeticoAngular';
  people : number = 0;
  rooms : number = 0;
  comps : number = 0;
  tvs : number = 0;
  tax : number = 0;
  washing : boolean = false;
  drying : boolean = false;

  sendQtdComp(event : any) {
    this.comps = Number(event);
  }
  sendQtdTV(event : any) {
    this.tvs = Number(event);
  }
  verifyDrying(event : any) {
    this.drying = Boolean(event);
  }
  verifyWashing(event : any) {
    this.washing = Boolean(event);
  }
  sendQtdRooms(event : any) {
    this.rooms = Number(event);
  }
  sendQtdPessoas(event : any) {
    this.people = Number(event);
  }
  sendTax(event : any) {
    this.tax = Number(event);
  }

  execute()
  {
    let value = 0;
    //appliance, days, power and hours a day
    value += this.rooms * 30 * 15 * 6;
    value += this.people * 30 * 5000 * 0.16;
    value += this.comps * 30 * 300 * 5;
    value += this.tvs * 30 * 90 * 5;
    if(this.washing)
    {
      value += 15 * 1000 * 1;
    }
    if(this.drying)
    {
      value += 15 * 3500 * 0.5;
    }

    this.showAnswer(value/1000, this.tax);

  }

  showAnswer(value : number, tax : number)
  {
    alert("Consumo: " + value.toFixed(2) + " kW, a pagar " + (value*tax).toFixed(2));
  }

}
