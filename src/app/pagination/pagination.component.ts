import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {RouterModule, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  post;
  totalPageN;
  pageN;
  constructor(
    private route:ActivatedRoute,
    private data:DataService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params=>{
      this.pageN= params.get('pageN')?params.get('pageN'):1;

      })

      this.data.getData(this.pageN)
      .subscribe((data)=>{
        this.post=data;
        
      })
  
    
      this.data.getAllData()
        .subscribe((data)=>{
          
         this.totalPageN=new Array(data);
         
         
        })
   }

  

  getDataToShow(i){
    
    
      this.data.getData(this.pageN)
      .subscribe((data)=>{
        this.post=data;
        
      })
      
      
  }

  

}
