import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bottone-campionati',
  templateUrl: './bottone-campionati.component.html',
  styleUrls: ['./bottone-campionati.component.css']
})
export class BottoneCampionatiComponent {

  nomeCampionato!:string;
  id!: string;
  constructor(private activatedRoute: ActivatedRoute) { }
  
  }

