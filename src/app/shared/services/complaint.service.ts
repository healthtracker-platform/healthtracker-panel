import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {Complaint} from '@shared/models/complaint.model';
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";

@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  static SEARCH = "/search";
  static DESCRIPTION = "/description";

  constructor(private httpService: HttpService) {
  }

  create(complaint: Complaint): Observable<Complaint> {
    return this.httpService
      .post(EndPoints.COMPLAINTS , complaint);
  }

  searchAll(): Observable<Complaint[]> {
    return this.httpService
      .get(EndPoints.COMPLAINTS+ComplaintService.SEARCH);
  }

  search(mobile: string): Observable<Complaint[]> {
    return this.httpService
      .get(EndPoints.COMPLAINTS+'/'+mobile);
  }

  delete(id: string): Observable<void> {
    return this.httpService.delete(EndPoints.COMPLAINTS +'/'+id);
  }

  updateDescription(oldId: string, complaint: Complaint): Observable<Complaint> {
    return this.httpService.patch(EndPoints.COMPLAINTS+'/'+oldId+ComplaintService.DESCRIPTION, complaint);
  }

  update(oldId: string, complaint: Complaint): Observable<Complaint> {
    return this.httpService.put(EndPoints.COMPLAINTS+'/'+oldId, complaint);
  }
}
