import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentDisplayService } from './services/component-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router){}

  nav(route: string){
    this.router.navigateByUrl(route)
  }

}
