import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  regions: string[] = ['Asia', 'Europe'];
  countries: string[] = ['example'];
  constructor(
  ) { }

  ngOnInit(): void {}
}
