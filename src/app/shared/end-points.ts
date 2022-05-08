import {environment} from '@env';

export class EndPoints {

  static USERS = environment.REST_USER + '/users';
  static PATIENTS = environment.REST_STANDARIZATION + '/patients';
  static PROFESSIONALS = environment.REST_STANDARIZATION + '/professionals';

}
