import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './Account'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = '../../assets/TaiNguyen/db/Students.json';
  listUser: any;
  Count = {
    right : 0,
    wrong : 0,
    maxpoint : 0,
    yourpoint : 0,
    subject : '',
  }
  account: Account = null;
  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {
      this.listUser = data
    })
  }
  getData() {
    return this.http.get(this.url)
  }
  addToList(acc: Account) {
    this.listUser.push(acc);
  }
}
