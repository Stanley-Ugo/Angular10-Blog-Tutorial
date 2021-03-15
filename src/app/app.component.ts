import { Component } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Blog App';
  constructor(private user:UsersService) {
    
  }

  enableBox()
  {
    this.disableBox = false;
  }
}
