import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts:any;
  searchText = "";
  listOfContacts:any ;

  isDelete:boolean= false;
  dataError:boolean=false;

  //pagination end
  constructor(private dataService:DataService, private http: HttpClient, private toastr: ToastrService) { }

  @Output() message=false;

  ngOnInit(): void {

    this.getContactsData();

  }

   showSuccess() {
    this.toastr.success('Success!', 'Contact Deleted Successfully!');
  }

  getContactsData(){
    this.dataService.getData().subscribe(res => {
      let data : any = res;
      if(data.status == 200){

        this.contacts = data.data;

      }else{
        this.contacts = [];
        this.dataError = true;
      }

  }, error => console.error(error));
}
    Search(){
      if(this.searchText!== ""){
        let searchValue = this.searchText.toLocaleLowerCase();

          this.contacts = this.contacts.filter((contact:any) =>{
          return contact.name.toLocaleLowerCase().match(searchValue )
          ;

              });

            }
            else {
            this.http.get('http://127.0.0.1:8000/api/allcontact').subscribe(res => {

                let data : any = res;
                this.contacts = data.data;

                    }, error => console.error(error));

            }

      }

      deleteData(id:any){
        if(confirm("Are you sure to delete id: "+id)) {

          this.dataService.deleteData(id).subscribe(res => {
            this.getContactsData();
            this.isDelete=true;
            this.showSuccess();
          })
        }
      }

}
