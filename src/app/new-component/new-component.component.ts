import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  constructor() { }

  @Input() persons: any;

  ngOnInit(): void {
  }
}