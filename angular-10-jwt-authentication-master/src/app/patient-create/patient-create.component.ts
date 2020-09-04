import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../_services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {

  @Input() patientDetails = {dob:'', firstname:'', lastname:'', email:'', phone:'', address:'', sex:''}

  constructor(
    public restApi: PatientService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addPatient() {
    this.restApi.createPatient(this.patientDetails).subscribe((data: {}) => {
      this.router.navigate(['/patient-list'])
    })
  }
}