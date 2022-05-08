import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {User} from "@shared/models/user.model";
import {Patient} from "@shared/models/patient.model";

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(private httpService: HttpService) {
  }

  create(patient: Patient): Observable<Patient> {
    return this.httpService
      .post(EndPoints.PATIENTS , patient);
  }
}
