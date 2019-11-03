import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './Account'

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = '../../assets/TaiNguyen/db/Students.json';
  listUser: any;
  account: Account;
  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {
      this.listUser = data
      console.log(this.listUser)
    })
  }
  getData() {
    return this.http.get(this.url)
  }
  addToList(acc : Account) {
    this.listUser.push(acc);
  }
}
