import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bandeja de entrada', url: '/folder/Bandeja de entrada', icon: 'mail' },
    { title: 'Salida', url: '/folder/Salida', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favoritos', icon: 'heart' },
    { title: 'Archivo', url: '/folder/Archivo', icon: 'archive' },
    { title: 'Basura', url: '/folder/Basura', icon: 'trash' },
    { title: 'No deseado', url: '/folder/No deseado', icon: 'warning' },
  ];
  public labels = ['Familia', 'Amigos', 'Notas', 'Trabajo', 'Viajes', 'Recordatorios'];
  constructor() {}
}
