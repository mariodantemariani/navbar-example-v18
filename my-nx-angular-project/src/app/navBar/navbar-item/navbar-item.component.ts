/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
  /**
   * Item disabled
   */
  @Input() disabled: boolean = false;

  /**
   * Item hide
   */
  @Input() hide: boolean = false;

  /**
   * Icon to be shown
   */
  @Input() itemIco: any; //Icon = '';

  /**
   * Title of the menu item
   */
  @Input() itemTitle: string = 'home';

  /**
   * Link to navigate to
   */
  @Input() navigationLink: string = '';

  /**
   * Item selected
   */
  @Input() selectedItem: string = '';

  /**
   * state of the navbar (possible values: contracted | expanded )
   */
  @Input() status: string = 'contracted';

  /**
   * Emmitter to implement response data on the parent component
   */
  @Output() emitSelectedNavbarItem: EventEmitter<any> = new EventEmitter<any>();

  selectNavbarItem($itemSelected: any) {
    this.emitSelectedNavbarItem.emit($itemSelected);
  }
}
