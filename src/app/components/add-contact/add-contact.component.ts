import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contact';
import { DataService } from 'src/app/service/data.service';
import {Router} from "@angular/router"

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})

export class AddContactComponent implements OnInit {

  isAdded: boolean = false;
  contact = new Contact();

  constructor(private dataService:DataService, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }

  showSuccess() {
    this.toastr.success('Success!', 'Contact Added Successfully!');
  }

  insertData(){

    this.dataService.insertData(this.contact).subscribe(res => {
      this.isAdded= true;
      this.showSuccess();
      this.router.navigate(['/contacts'])

    })
  }



}
