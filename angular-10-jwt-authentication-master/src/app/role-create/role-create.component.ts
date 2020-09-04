import { Component, OnInit, Input } from '@angular/core';
import { RoleService } from '../_services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  @Input() roleDetails = {name:''}

  constructor(
    public restApi: RoleService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addRole() {
    this.restApi.createRole(this.roleDetails).subscribe((data: {}) => {
      this.router.navigate(['/role-list'])
    })
  }

}

