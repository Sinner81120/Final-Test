import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dangthi',
  templateUrl: './dangthi.component.html',
  styleUrls: ['./dangthi.component.css']
})
export class DangthiComponent implements OnInit {
  p = 1;
  url = '';
  lists: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(para => {
      this.url = '../../assets/TaiNguyen/db/Quizs/' + para.get('subjectId') + '.json';
    })
    this.GetData().subscribe(data => {
      this.lists = data;
      console.log(this.lists)
    })
  }

  GetData() {
    return this.http.get(this.url);
  }
}
