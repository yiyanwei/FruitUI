import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {

  private thumblist:any[] = [];
  constructor() { }

  ngOnInit() {
    for(var i=0;i<20;i++)
    {
      this.thumblist.push({
        title:'',
        thumbnail:''
      });
    }
  }

}
