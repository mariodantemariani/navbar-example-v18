import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-navbar-logo',
  standalone: true,
  imports: [],
  templateUrl: './navbar-logo.component.html',
  styleUrl: './navbar-logo.component.scss',
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('animateLogo', [
      state(
        'contracted',
        style({
          overflow: 'hidden',
          width: '100%',
        })
      ),
      state(
        'expanded',
        style({
          overflow: 'hidden',
          width: '100%',
        })
      ),
      transition('expanded <=> contracted', animate('400ms ease-in-out')),
    ]),
  ],
})
export class NavbarLogoComponent {
  @Input() status = 'contracted';
}
