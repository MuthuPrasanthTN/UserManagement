import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserserviceService} from '../_services/userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  User: any = [];
 // searchedKeyword: string;

  constructor(
    public restApi: UserserviceService, public router: Router
  ) { }

  ngOnInit() {
    this.loadUsers()
    
    
  }

  // Get employees list
  loadUsers() {
    this.restApi.getUsers().subscribe((data: {}) => {
      this.User = data;
    })
   
  }

  // Delete employee
  deleteUser(id:number) {
     if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteUser(id).subscribe(data => {
        console.log(data);
        this.loadUsers();
        //this.router.navigate(['/user-list'])
        
      })
    } 

    
  }  

}
