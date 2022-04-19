import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpService} from "@core/http.service";
import {EndPoints} from "@shared/end-points";
import {User} from "@shared/models/user.model";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private httpService: HttpService) {
  }

  create(user: User): Observable<User> {
    return this.httpService
      .post(EndPoints.USERS , user);
  }

  // searchAll(): Observable<Complaint[]> {
  //   return this.httpService
  //     .get(EndPoints.COMPLAINTS+ComplaintService.SEARCH);
  // }
  //
  // search(mobile: string): Observable<Complaint[]> {
  //   return this.httpService
  //     .get(EndPoints.COMPLAINTS+'/'+mobile);
  // }
  //
  // delete(id: string): Observable<void> {
  //   return this.httpService.delete(EndPoints.COMPLAINTS +'/'+id);
  // }

  // updateDescription(oldId: string, complaint: Complaint): Observable<Complaint> {
  //   return this.httpService.patch(EndPoints.COMPLAINTS+'/'+oldId+ComplaintService.DESCRIPTION, complaint);
  // }
  //
  update(oldId: string, user: User): Observable<User> {
    return this.httpService.put(EndPoints.USERS+'/'+oldId, user);
  }
}
