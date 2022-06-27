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
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) {
  }

  create(patient: Patient): Observable<String> {
    return this.httpService
      .post(EndPoints.PATIENTS , patient);
  }

  searchByProfessional(professional: string): Observable<Patient[]> {
    return this.httpService
      .param("professional", professional)
      .get(EndPoints.PATIENTS + PatientService.SEARCH);
  }

  searchAll(): Observable<Patient[]> {
    return this.httpService
      .get(EndPoints.PATIENTS + PatientService.SEARCH);
  }
}
