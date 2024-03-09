import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
  @Input() major!: number;
  @Input() logData!: any;

  @Input() minor!: number;
  constructor() { }

  ngOnInit(): void {
  }

}