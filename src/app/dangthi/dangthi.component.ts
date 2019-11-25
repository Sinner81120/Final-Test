import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AccountService } from './../account.service'
@Component({
  selector: 'app-dangthi',
  templateUrl: './dangthi.component.html',
  styleUrls: ['./dangthi.component.css']
})

export class DangthiComponent implements OnInit {
  p = 1;
  url = '';
  lists: any;
  config = {
    leftTime: 5400
  }
  account;

  right;
  wrong;
  maxpoint;
  yourpoint;
  subject;

  check = [];
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private Acc: AccountService) {
    this.account = this.Acc.account
  }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.url = '../../assets/TaiNguyen/db/Quizs/' + para.get('subjectId') + '.json';
      this.subject = para.get('subjectId')
    })
    this.GetData().subscribe(data => {
      this.lists = data;
    })
    if (this.account === null) {
      alert('Đăng nhập để có thể làm bài test');
      this.router.navigate(['/Login'])
    }
  }

  GetData() {
    return this.http.get(this.url);
  }
  Next() {
    if (this.p < this.lists.length) {
      ++this.p;
    }
  }
  Previous() {
    if (this.p > 1) {
      --this.p;
    }
  }
  First() {
    this.p = 1;
  }
  Last() {
    this.p = this.lists.length;
  }
  Finish() {
    this.yourpoint = 0;
    this.maxpoint = 0;
    this.right = 0;
    for (let i = 0; i < this.lists.length; ++i) {
      this.maxpoint += this.lists[i].Marks
      if (this.lists[i].AnswerId == this.check[i]) {
        this.yourpoint += this.lists[i].Marks
        this.right++;
      }
    }
    this.wrong = this.lists.length - this.right
    this.Acc.Count.wrong = this.wrong
    this.Acc.Count.maxpoint = this.maxpoint
    this.Acc.Count.right = this.right
    this.Acc.Count.yourpoint = this.yourpoint
    this.Acc.account.marks = this.yourpoint
    this.Acc.Count.subject = this.subject
    this.router.navigate(['/Result'])
  }
}
