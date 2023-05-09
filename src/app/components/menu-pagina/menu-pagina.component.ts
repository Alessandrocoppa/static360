import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classifica } from 'src/app/interfaces/classifica';
import { squadre } from 'src/app/interfaces/squadre';
import { ApiService } from 'src/app/services/api.service';
import { IdcampionatoService } from 'src/app/services/idcampionato.service';

@Component({
  selector: 'app-menu-pagina',
  templateUrl: './menu-pagina.component.html',
  styleUrls: ['./menu-pagina.component.css']
})
export class MenuPaginaComponent {

  idSelezionato!: string

  constructor(private api:ApiService, private route:ActivatedRoute, public idCampionato:IdcampionatoService){ 
    // const idCampionato = this.route.snapshot.paramMap.get('id')
    this.idSelezionato = this.idCampionato.id

   }

  
  
}
