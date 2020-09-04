import { Component, OnInit } from '@angular/core';
import { PatientService } from '../_services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  patientData: any = {};

  constructor(
    public restApi: PatientService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getPatient(this.id).subscribe((data: {}) => {
      this.patientData = data;
    })
  }

  // Update employee data
  updatePatient() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updatePatient(this.id, this.patientData).subscribe(data => {
        this.router.navigate(['/patient-list'])
      })
    }
  }

}
