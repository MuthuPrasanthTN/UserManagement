import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../_services/userservice.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  userData: any = {};

  constructor(
    public restApi: UserserviceService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getUser(this.id).subscribe((data: {}) => {
      this.userData = data;
    })
  }

  // Update employee data
  updateUser() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateUser(this.id, this.userData).subscribe(data => {
        this.router.navigate(['/user-list'])
      })
    }
  }

}
