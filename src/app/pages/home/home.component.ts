import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagenes:string[]=[
    'imagenes/gorraUno.png',
    'imagenes/gorraDos.png',
    'imagenes/gorraTres.png',
  ]
}
