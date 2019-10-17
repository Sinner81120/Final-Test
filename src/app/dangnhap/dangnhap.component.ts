import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  url = '../../assets/TaiNguyen/db/Students.json';
  listUser : any;
  user;
  pass;
  constructor(private http : HttpClient) { 

  }

  ngOnInit() {
    this.getData().subscribe(data => {
      this.listUser = data
      console.log(this.listUser)
    })
  }
  getData(){
    return this.http.get(this.url)
  }
}
