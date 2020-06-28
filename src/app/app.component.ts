import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMenu = false;
  darkModeActive = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleMode() {
    this.darkModeActive = !this.darkModeActive;
  }
}
