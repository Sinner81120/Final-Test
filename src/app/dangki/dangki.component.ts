import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {
  account = {
    username: "",
    password: "",
    fullname: "",
    email: "",
    gender: "",
    birthday: "",
    schoolfee: 0,
    marks: 0
  };
  constructor(private acc: AccountService) { }

  ngOnInit() {

  }
  Register() {
    alert('Đăng kí thành công')
    this.acc.addToList(this.account)
    console.log(this.acc.listUser)
  }
}
