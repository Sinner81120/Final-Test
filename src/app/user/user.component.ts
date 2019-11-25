import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'
import { Account } from './../Account'
import { Router } from '@angular/router'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  account: Account;
  constructor(private acc: AccountService,private router : Router) { }

  ngOnInit() {
    this.account = this.acc.account
  }
  Logout() {
    this.acc.account = null;
    this.router.navigate(['/Home'])
  }

}
