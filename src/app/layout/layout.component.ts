import { Component, OnInit } from '@angular/core';
import { SidebarRouteInfo, SidebarRoutes } from './models/SidebarRouteInfo';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menuItems: SidebarRouteInfo[];

  constructor() { }

  ngOnInit() {
    this.menuItems = SidebarRoutes.filter(menuItem => menuItem);
  }

}
