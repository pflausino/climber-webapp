import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  formData: Person;
  readonly rootUrl = 'https://localhost:44301/api';

  constructor(private http: HttpClient) { }

  postPerson(formData: Person) {
    return this.http.post(this.rootUrl + '/Persons', formData);
  }
}
