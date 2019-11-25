import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-quenpass',
  templateUrl: './quenpass.component.html',
  styleUrls: ['./quenpass.component.css']
})
export class QuenpassComponent implements OnInit {
  email;
  constructor(private acc: AccountService, private router : Router) { }

  ngOnInit() {
  }
  Pass() {
    
    for (let i = 0; i < this.acc.listUser.length; ++i) {
      if (this.email == this.acc.listUser[i].email) {
        alert('Password:' +'  '+ this.acc.listUser[i].password)
        this.router.navigate(['/Login'])
      }
    }
  }
}
