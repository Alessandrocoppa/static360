import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'static360';

  rotta!:string

  constructor(private route:Router){this.route.events.subscribe((res)=>{
    console.log(res)
    if(res instanceof NavigationEnd){
      this.rotta = res.url
    }
  }) }
}
