import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navBar/navbar.component';

const MODULES = [RouterOutlet, NavbarComponent];

@Component({
  standalone: true,
  imports: [MODULES],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-nx-angular-project';
}
