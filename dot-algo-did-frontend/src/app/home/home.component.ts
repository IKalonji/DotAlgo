import { Component, OnInit } from '@angular/core';
import { CreateDidComponent } from '../create-did/create-did.component';
import { ComponentDisplayService } from '../services/component-display.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private displayService: ComponentDisplayService) { }

  ngOnInit(): void {
  }

  showComponent(component: string){
  }

}
