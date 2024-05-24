/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavbarSearchComponent } from './navbar-search/navbar-search.component';
import { NavbarLogoComponent } from './navbar-logo/navbar-logo.component';
import { NavbarArrowsComponent } from './navbar-arrows/navbar-arrows.component';
import { CommonModule } from '@angular/common';
import { MenuItem } from './menu-item';

const MODULES = [
  CommonModule,
  NavbarLogoComponent,
  NavbarArrowsComponent,
  NavbarSearchComponent,
  NavbarItemComponent,
];

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MODULES],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  itemSelected = '';
  status: string = 'contracted';

  @Input() collectionOfItems: Array<any> = [
    {
      title: 'Docs',
      //icon: randomIcon,
      disabled: true,
      hide: false,
      routerLink: '/docs',
    },
    {
      title: 'Angular',
      //icon: randomIcon,
      disabled: true,
      hide: false,
      routerLink: '/angular',
    },
    {
      title: 'Explore Go',
      //icon: randomIcon,
      disabled: true,
      hide: false,
      routerLink: '/go',
    },
  ];

  /**
   * Emmitter to implement response data on the parent component
   */
  @Output() emitNavbarStatus: EventEmitter<any> = new EventEmitter<any>();

  updateSelectedItem(itemSelected: any) {
    console.log(itemSelected);
    this.itemSelected = itemSelected;
  }

  updateNavbarStatus(status: any): void {
    console.log(status);
    this.status = status;
    this.emitNavbarStatus.emit(status);
  }
}
