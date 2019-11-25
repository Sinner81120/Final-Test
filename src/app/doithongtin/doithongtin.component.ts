import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'
import { Router } from '@angular/router'

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
  constructor(private Acc: AccountService , private router : Router) { }

  ngOnInit() {
    this.acc = this.Acc.account
  }
  Accept() {
    alert('Đổi thông tin thành công')
    for (let i = 0; i < this.Acc.listUser.length; ++i) {
      if (this.acc.username == this.Acc.listUser[i].username && this.acc.password == this.Acc.listUser[i].password) {
        this.Acc.listUser[i] = this.acc
      }
    }
    this.router.navigate(['/User'])
  }
}
