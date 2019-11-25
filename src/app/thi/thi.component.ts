import { Component, OnInit } from '@angular/core';
import { listsubject } from '../../assets/TaiNguyen/db/Subjects'
@Component({
  selector: 'app-thi',
  templateUrl: './thi.component.html',
  styleUrls: ['./thi.component.css']
})
export class ThiComponent implements OnInit {
  p: number;
  lists = [...listsubject];
  constructor() { }

  ngOnInit() {
  }
}
