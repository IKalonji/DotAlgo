import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dot-algo-demo-frontend';
  url = "http://localhost:3000/";
  display:any;
  mnemonic:any;
  prefix:any;
  toResolve:any;

  constructor(private http: HttpClient){}

  generateAccount(){
    this.http.get(this.url + "account").subscribe(
      (data) => {
        let dataAsJson = JSON.stringify(data)
        let json = JSON.parse(dataAsJson)
        this.logToPage(dataAsJson);
      }
    );
  }

  createDomain(){
    console.log(this.mnemonic)
    this.http.post(this.url + "create/"+this.prefix+".algo", {account_mneumonic:this.mnemonic}).subscribe(data => {
      let dataAsJson = JSON.stringify(data)
      let json = JSON.parse(dataAsJson)
      this.logToPage(dataAsJson);
    })
  }

  resolve(){
    this.http.get(this.url+"resolve/"+this.toResolve).subscribe(data => {
      let dataAsJson = JSON.stringify(data)
      let json = JSON.parse(dataAsJson)
      this.logToPage(dataAsJson);
      })
  }

  getAll(){
    this.http.get(this.url + "all").subscribe(data => {
      let dataAsJson = JSON.stringify(data)
      let json = JSON.parse(dataAsJson)
      this.logToPage(dataAsJson);
        })
  }

  logToPage(data:any){
    this.display = data;
  }
}
