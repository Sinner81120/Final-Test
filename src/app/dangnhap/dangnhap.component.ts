import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  x;
  user;
  pass;
  Account;
  constructor(private Acc: AccountService, private router : Router) {
  }

  ngOnInit() {
  }
  Check() {
    this.x = 0;
    for (let i = 0; i < this.Acc.listUser.length; ++i) {
      if (this.user == this.Acc.listUser[i].username && this.pass == this.Acc.listUser[i].password) {
        ++this.x;
        this.Acc.account = this.Acc.listUser[i]
        this.Account = this.Acc.account
        this.router.navigate(['/User'])
      }
    }
    if (this.x == 0) {
      alert('Sai tài khoản hoặc mật khẩu')
    }
  }
}
