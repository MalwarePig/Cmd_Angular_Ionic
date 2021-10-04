import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'ellipsis-horizontal-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alertas'
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'stop-outline',
      name: 'Botones',
      redirecTo: '/botones'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

