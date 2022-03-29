import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router"
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.scss']
})
export class EditcontactComponent implements OnInit {

  id:any;
  data:any;
  contact = new Contact();

  isUpdated: boolean =false;

  constructor(private dataService:DataService, private route: ActivatedRoute, private router: Router,
    private toastr: ToastrService) { }


  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get("id");
    this.getData();

  }

  showSuccess() {
    this.toastr.success('Success!', 'Contact Updated Successfully!');
  }
  showDanger(message:any) {
    this.toastr.warning('Validation Error!', message);
  }
  getData(){

    this.dataService.getOne(this.id).subscribe(res => {

      this.data = res;
      this.contact = this.data.data;

      console.log(this.contact);

      })
  }

  updateContact(){
    this.dataService.updatetData(this.contact).subscribe(res => {
      this.isUpdated= true;
      this.showSuccess();
      this.router.navigate(['/contacts'])
    },
    (error) => {
      if(error.status == 422){
        this.showDanger(error.message);
      }
   })
  }

}
