/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navbar-arrows',
  standalone: true,
  imports: [],
  templateUrl: './navbar-arrows.component.html',
  styleUrl: './navbar-arrows.component.scss',
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotateArrow', [
      state('contracted', style({ transform: 'rotate(0)' })),
      state('expanded', style({ transform: 'rotate(-180deg)' })),
      transition('expanded <=> contracted', animate('400ms ease-in-out')),
    ]),
  ],
})
export class NavbarArrowsComponent {
  /**
   * Arrow's state. Possible values of 'expanded' : 'contracted'
   */
  @Input() status = 'contracted';

  /**
   * Emmitter to implement response data on the parent component
   */
  @Output() emitArrowAction: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  rotate(status: string) {
    console.log(status);
    this.status = status === 'contracted' ? 'expanded' : 'contracted';

    this.emitArrowAction.emit(this.status);
  }
}
