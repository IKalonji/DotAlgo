import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDidComponent } from './create-did/create-did.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create-did",
    component: CreateDidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
