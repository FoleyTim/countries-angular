import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() values: string[];
  @Input() label: string;
  @Output() selectEvent = new EventEmitter();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSelect(event) {
    this.selectEvent.emit(event.target.value);
  }
}
