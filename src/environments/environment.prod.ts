import pkg from '../../package.json';

export const environment = {
  production: true,
  NAME: pkg.name,
  VERSION: pkg.version,
  REST_USER: 'https://healthtracker-user.herokuapp.com',
  REST_STANDARIZATION: 'https://healthtracker-fhir.herokuapp.com',
};
