import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  route: string
}


@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: `./sideMenu.component.html`,
  styleUrl: './sideMenu.component.css',
})
export class SideMenuComponent {

    public reactiveMenu: MenuItem[] =  [
      { title: "Básicos", route: "./reactive/basic" },
      { title: "Dinámicos", route: "./reactive/dynamic" },
      { title: "Switches", route: "./reactive/switches" },
    ];

    public authMenu: MenuItem[] =  [
      { title: "Registro", route: "./auth" }
    ];
list: any;
item: any;



 }
