import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  @Input() holder!: string;
  select: boolean = false;

  @Output() send = new EventEmitter();

  onChecked() {
    this.select = !this.select;
    this.send.emit(this.select);
  }
}
