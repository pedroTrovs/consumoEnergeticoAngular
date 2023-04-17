import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() holder!: string;
  @Output() send = new EventEmitter();
  value: number=0;

  onChange()
  {
    this.send.emit(this.value);
  }
}
