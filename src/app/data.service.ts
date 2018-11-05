import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 


  }

  getData(i){
    return this.http.get(`https://paginationappdemo.herokuapp.com/data?pageN=${i}&&pageS=5`)
      
      
  }

  getAllData(){
    return this.http.get(`https://paginationappdemo.herokuapp.com/all`)
  }
}
