import { Component, OnInit } from '@angular/core';
import { RoleService } from '../_services/role.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.css']
})
export class RoleEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  roleData: any = {};

  constructor(
    public restApi: RoleService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getRole(this.id).subscribe((data: {}) => {
      this.roleData = data;
    })
  }

  // Update employee data
  updateRole() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateRole(this.id, this.roleData).subscribe(data => {
        this.router.navigate(['/role-list'])
      })
    }
  }

}

