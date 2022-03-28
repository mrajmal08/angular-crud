import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/allcontact');
  }

  insertData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addcontact', data);
  }

  deleteData(id:number){

    return this.httpClient.delete('http://127.0.0.1:8000/api/destroy/'+id);

  }

  getOne(id:any){

    return this.httpClient.get('http://127.0.0.1:8000/api/editcontact/'+id);
  }

  updatetData(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addcontact', data);
  }


}
