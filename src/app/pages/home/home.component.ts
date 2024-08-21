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
    '/public/imagenes/gorraUno.webp',
    '/public/imagenes/gorraDos.webp',
    '/public/imagenes/gorraTres.webp',
    '/public/imagenes/amazonLogo.png'
  ]
}
