import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentDisplayService {

  component: string = "welcome"

  constructor() 
  {

  }

  setComponent(component: string){
    this.component = component;
  }

  getComponent(){
    return this.component;
  }
}
