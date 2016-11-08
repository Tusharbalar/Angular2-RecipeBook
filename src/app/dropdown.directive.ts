import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[nlDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }

  @HostListener('click') open() {
    this.isOpen = true;
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
  }

  private isOpen = false;

  constructor() { }

}
