import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';
import { SignUpData } from '../_services/userservice.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  form:any={};
  
 // @Input() employeeDetails = {username:'', firstname:'', lastname:'', email:'', password:'', active:1, phone:''}

  
  constructor(
    public restApi: UserserviceService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addUser() {

    const {role,username,firstname,lastname,phone,email,password} = this.form;
    const userData: SignUpData = {username,firstname,lastname,phone,email,password,role: [role]};
  
    this.restApi.createUser(userData).subscribe((data: {}) => {
      this.router.navigate(['/user-list'])
    })
  }

}
