import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'
import { Account } from '../Account'

@Component({
  selector: 'app-doithongtin',
  templateUrl: './doithongtin.component.html',
  styleUrls: ['./doithongtin.component.css']
})
export class DoithongtinComponent implements OnInit {
  acc: {
    username,
    password,
    fullname,
    email,
    gender,
    birthday,
    schoolfee,
    marks,
  };
  constructor(private Acc: AccountService) { }

  ngOnInit() {
    this.acc = this.Acc.account
  }
  Accept(){
    for (let i = 0; i < this.Acc.listUser.length; ++i) {
      if (this.acc.username == this.Acc.listUser[i].username && this.acc.password == this.Acc.listUser[i].password) {
        this.Acc.listUser[i] = this.acc
      }
    }
  }
}
