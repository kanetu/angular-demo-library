import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular01';

  menuSidebar = [
    {name: 'Login', link: '/'},
    {name: 'Main', link: '/main'},
  ];
}
