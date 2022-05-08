import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {User} from "@shared/models/user.model";
import {Patient} from "@shared/models/patient.model";
import {Professional} from "@shared/models/professional.model";

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {

  constructor(private httpService: HttpService) {
  }

  create(professional: Professional): Observable<Professional> {
    return this.httpService
      .post(EndPoints.PROFESSIONALS , professional);
  }
}
