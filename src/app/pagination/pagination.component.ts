import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  post;
  pageN;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData(1)
    .subscribe((data)=>{
      this.post=data;
      
    })

    
      this.data.getAllData()
        .subscribe((data)=>{
          
this.pageN=new Array(data);
          
         
        })
    

  }

  

  getDataToShow(i:number){
    this.data.getData(i)
      .subscribe((data)=>{
        this.post=data;
        
      })
      
  }

  

}
