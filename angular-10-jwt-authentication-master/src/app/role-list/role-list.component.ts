import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RoleService} from '../_services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  Role: any = [];

  constructor(
    public restApi: RoleService, public router: Router
  ) { }

  ngOnInit() {
    //this.loadEmployees()
     this.restApi.getRoles().subscribe((data: {}) => {
      this.Role = data;
    })
  }

  // Get employees list
  loadRoles() {
   
  }

 
  

}

