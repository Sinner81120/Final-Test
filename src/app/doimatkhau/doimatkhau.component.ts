import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {
  pass;
  passnew;
  repassnew;
  constructor(private acc: AccountService) { }

  ngOnInit() {
    console.log(this.acc.account)
  }
  Accept() {
    if (this.pass == this.acc.account.password) {
      this.acc.account.password == this.passnew;
    }
  }
}
