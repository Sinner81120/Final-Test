import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service'

@Component({
  selector: 'app-ketqua',
  templateUrl: './ketqua.component.html',
  styleUrls: ['./ketqua.component.css']
})
export class KetquaComponent implements OnInit {
  Count;
  PercentPoint = 0;
  constructor(private Acc : AccountService) { 
    
  }

  ngOnInit() {
    this.Count = this.Acc.Count;
    this.PercentPoint = Math.round(this.Count.yourpoint/this.Count.maxpoint *100)/100;
  }

}
