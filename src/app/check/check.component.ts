import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {
  @Input() holder!: string;
  @Output() select!: boolean;
}
