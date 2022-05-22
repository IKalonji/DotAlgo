import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import  {Web3Storage}  from 'web3.storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dot-algo-demo-frontend';
  url = "http://localhost:3000/";
  web3Storage = "ENTER WEB3STORAGE KEY HERE"
  client:any;
  display:any;
  mnemonic:any;
  prefix:any;
  toResolve:any;
  avatar:File | null = null;

  constructor(private http: HttpClient){
    this.client = new Web3Storage({token:this.web3Storage})
  }

  generateAccount(){
    this.http.get(this.url + "account").subscribe(
      (data) => {
        let dataAsJson = JSON.stringify(data)
        let json = JSON.parse(dataAsJson)
        this.logToPage(dataAsJson);
      }
    );
  }

  uploadAvatar(event:any){
    this.avatar = event.target.files[0];
  }

  async createDomain(){
    let CID = "no available avatar"
    console.log(this.avatar)
    console.log(this.avatar != null)
    if (this.avatar != null){
      CID = await this.client.put([this.avatar], {
        name: "avatar"
      })
      console.log(CID);
    }
    console.log(this.mnemonic)
    this.http.post(this.url + "create/"+this.prefix+".algo", {account_mneumonic:this.mnemonic, avatar: CID}).subscribe(data => {
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
