import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService } from './users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Blog App';
  constructor(private user:UsersService,
              private vcr: ViewContainerRef,
              private cfr: ComponentFactoryResolver) {

  }


  async loadAdmin() {
    this.vcr.clear();
    const { AdminListComponent } = await import('./admin-list/admin-list.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )
  }

  loadUser() {

  }
}
