import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'

@Component({
  selector: 'app-quenpass',
  templateUrl: './quenpass.component.html',
  styleUrls: ['./quenpass.component.css']
})
export class QuenpassComponent implements OnInit {
  email;
  constructor(private acc: AccountService) { }

  ngOnInit() {
  }
  Pass() {
    for (let i = 0; i < this.acc.listUser.length; ++i) {
      if (this.email == this.acc.listUser[i].email) {
        alert('Password:' +'  '+ this.acc.listUser[i].password)
      }
    }
  }
}
