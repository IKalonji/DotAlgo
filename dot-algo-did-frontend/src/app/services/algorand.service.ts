import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { create } from 'ipfs-http-client'

@Injectable({
  providedIn: 'root'
})
export class AlgorandService {

  BASE_URL = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  generateAccount(){
    return this.http.get(this.BASE_URL+"account")
  }

  createDID(domain:string, mnemonic:string, CID:string){
    return this.http.post(this.BASE_URL+`create/${domain}.algo`, {account_mneumonic:mnemonic, cid:CID})
  }

  async uploadToIPFS(data:any){
    const client = create({url:"'https://ipfs.infura.io:5001/api/v0'"})
    const cid = await client.add(data)
    return cid;
  }


}
