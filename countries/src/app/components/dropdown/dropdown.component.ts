import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../models/country'

@Component({
  selector: 'dropdown',
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
    console.log('!!!',event.target)
    this.selectEvent.emit(event.target.value);
  }
}
