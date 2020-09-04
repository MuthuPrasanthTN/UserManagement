import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../_services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {

  User: any = [];

  constructor(
    public restApi: UserserviceService, public router: Router
  ) { }

  ngOnInit() {
    //this.loadEmployees()
     this.restApi.getUsers().subscribe((data: {}) => {
      this.User = data;
    })
  }

  // Get employees list
  loadUsers() {
   
  }

  // Delete employee
 

}

