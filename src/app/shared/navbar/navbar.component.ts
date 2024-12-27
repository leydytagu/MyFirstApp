import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public selectedLink: string = '/';

  setSelectedLink(link: string): void {
    this.selectedLink = link;
  }
}
