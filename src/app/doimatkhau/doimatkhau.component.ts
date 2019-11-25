import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-doimatkhau',
  templateUrl: './doimatkhau.component.html',
  styleUrls: ['./doimatkhau.component.css']
})
export class DoimatkhauComponent implements OnInit {
  pass;
  passnew;
  repassnew;
  constructor(private acc: AccountService, private router : Router) { }

  ngOnInit() {
  }
  Accept() {
    if (this.pass == this.acc.account.password) {
      if (this.passnew == this.repassnew) {
        alert('Đổi mật khẩu thành công')
        this.acc.account.password = this.passnew;
        for (let i = 0; i < this.acc.listUser.length; ++i) {
          if (this.acc.account.username == this.acc.listUser[i].username && this.acc.account.password == this.acc.listUser[i].password) {
            this.acc.listUser[i] = this.acc.account
          }
        }
        this.router.navigate(['/User']);
      }
      else alert('Password mới không trùng khớp ')
    }
    else alert('Password cũ không chính xác !')
  }
}
