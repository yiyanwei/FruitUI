import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {

  //加载数据的api地址，这里不做配置
  public SidebarApi: string = '';
  //侧边栏的数据集合
  private SidebarDatas:any[]=[];
  constructor() { }

  ngOnInit() {
    var api = '';
    //如果不存在给一个默认的地址
    if (this.SidebarApi.trim().length <= 0) {
      api = '';
    } else {
      api = this.SidebarApi;
    }

    //测试数据
     for(var i=0;i<10;i++)
     {
       this.SidebarDatas.push({
         title:'侧边栏'+i,
         key:i
       });
     }
  }

}
