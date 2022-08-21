import { Component, OnInit } from '@angular/core';
import { CreateDidComponent } from '../create-did/create-did.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  showComponent(component: string){
  }

}
