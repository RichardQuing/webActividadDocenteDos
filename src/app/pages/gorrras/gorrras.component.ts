import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gorra } from '../../utils/gorra';
import * as gorraData from '../../../../public/json/gorraData.json'
import { Router } from '@angular/router';



@Component({
  selector: 'app-gorrras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gorrras.component.html',
  styleUrl: './gorrras.component.css'
})
export class GorrrasComponent {
  gorras:Gorra[]=(gorraData as any).default;
  
  constructor (private router:Router){ }

  ngOnInit(): void {
  
  }

  onClickGorra(gorra:Gorra):void{
    this.router.navigate(['/gorra',gorra.id]);
  }
}
