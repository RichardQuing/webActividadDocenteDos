import { Component } from '@angular/core';
import { Gorra } from '../../utils/gorra';
import * as gorraData from '../../../../public/json/gorraData.json' 
import {  ActivatedRoute,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-gorra',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive ],
  templateUrl: './gorra.component.html',
  styleUrl: './gorra.component.css'
})
export class GorraComponent {
  id:number=0;
  gorra?:Gorra;
  
  constructor(private route:ActivatedRoute){ }
  
  ngOnInit(): void {
  this.route.paramMap.subscribe(
      (params)=>{
        this.id =Number( params.get("id"));
        console.log(this.id);
      }
    );
    this.gorra=((gorraData as any).default as Gorra[])
    .find((gorra)=>gorra.id===this.id)!;
  }
  }
  