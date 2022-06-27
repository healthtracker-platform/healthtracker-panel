import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {User} from "@shared/models/user.model";
import {Patient} from "@shared/models/patient.model";
import {Professional} from "@shared/models/professional.model";
import {map} from "rxjs/operators";
import {ProfessionalName} from "@shared/models/professional-name.model";

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  private static SEARCH = '/search';
  private static NAME = '/name';

  constructor(private httpService: HttpService) {
  }

  create(professional: Professional): Observable<String> {
    return this.httpService
      .post(EndPoints.PROFESSIONALS , professional);
  }

  searchProfessionalNamesByName(name: string): Observable<string[]> {
    return this.httpService
      .param('name', name)
      .get(EndPoints.PROFESSIONALS + ProfessionalService.SEARCH + ProfessionalService.NAME)
      .pipe(
        map(response => response.names)
      );
  }

  searchProfessionalByName(name: string): Observable<Professional> {
    return this.httpService
      .param('name', name)
      .get(EndPoints.PROFESSIONALS + ProfessionalService.SEARCH)
      .pipe(
        map(response => response)
      );
  }

  searchAll(): Observable<Professional[]>{
    return this.httpService
      .get(EndPoints.PROFESSIONALS);
  }
}
