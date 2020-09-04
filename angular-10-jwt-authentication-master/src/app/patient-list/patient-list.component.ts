import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PatientService} from '../_services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  Patient: any = [];

  constructor(
    public restApi: PatientService, public router: Router
  ) { }

  ngOnInit() {

  
  this.loadPatients();
    
  }

  // Get employees list
  loadPatients() {
    this.restApi.getPatients().subscribe((data: {}) => {
      this.Patient = data;
     })
   
  }

  // Delete employee
  deletePatient(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deletePatient(id).subscribe(data => {
       this.loadPatients();
       // this.router.navigate(['/patient-list'])
        
      })
    }
  }  

}
