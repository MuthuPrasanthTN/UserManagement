import { Component, OnInit } from '@angular/core';
import { PatientService } from '../_services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-lists',
  templateUrl: './patient-lists.component.html',
  styleUrls: ['./patient-lists.component.css']
})
export class PatientListsComponent implements OnInit {

  Patient: any = [];

  constructor(
    public restApi: PatientService, public router: Router
  ) { }

  ngOnInit() {

  
    //this.loadEmployees()
     this.restApi.getPatients().subscribe((data: {}) => {
     this.Patient = data;
    })
  }

  // Get employees list
  loadEmployees() {
   
  }



}

