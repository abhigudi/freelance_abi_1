import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserData, SearchFilterFields} from './search.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchFilterFields: SearchFilterFields = {
    department: [],
    designation: [],
    experience: [],
    location: [],
    role: [],
    team: [],
    yearOfJoining: []
  };

  constructor(private http: HttpClient) { }

  getData(): Observable<UserData[]> {
    return this.http.get('assets/data/users.json') as any;
  }

  addImage(userData: UserData[]): UserData[] {
    return userData.map( user => {
      user.image = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      return user;
    });
  }

  getUniqueSearchFields(userData: UserData[]): SearchFilterFields {
    userData.forEach( user => {
      if ( this.searchFilterFields.department.indexOf(user.department) < 0 ) {
        this.searchFilterFields.department.push(user.department);
      }
      if ( this.searchFilterFields.designation.indexOf(user.designation) < 0 ) {
        this.searchFilterFields.designation.push(user.designation);
      }
      if ( this.searchFilterFields.experience.indexOf(user.experience) < 0 ) {
        this.searchFilterFields.experience.push(user.experience);
      }
      if ( this.searchFilterFields.location.indexOf(user.location) < 0 ) {
        this.searchFilterFields.location.push(user.location);
      }
      if ( this.searchFilterFields.role.indexOf(user.role) < 0 ) {
        this.searchFilterFields.role.push(user.role);
      }
      if ( this.searchFilterFields.team.indexOf(user.team) < 0 ) {
        this.searchFilterFields.team.push(user.team);
      }
      if ( this.searchFilterFields.yearOfJoining.indexOf(user.yearOfJoining) < 0 ) {
        this.searchFilterFields.yearOfJoining.push(user.yearOfJoining);
      }
    });
    this.searchFilterFields.department = this.searchFilterFields.department.sort();
    this.searchFilterFields.designation = this.searchFilterFields.designation.sort();
    this.searchFilterFields.experience = this.searchFilterFields.experience.sort();
    this.searchFilterFields.location = this.searchFilterFields.location.sort();
    this.searchFilterFields.role = this.searchFilterFields.role.sort();
    this.searchFilterFields.team = this.searchFilterFields.team.sort();
    this.searchFilterFields.yearOfJoining = this.searchFilterFields.yearOfJoining.sort();
    return this.searchFilterFields;
  }

  filterSearchResults(users: UserData[], filter: SearchFilterFields): UserData[] {
    const ret =  users.filter ( user => {
      const department = filter.department.length > 0 ?  filter.department.indexOf(user.department) > -1 : true;
      const designation = filter.designation.length > 0 ? filter.designation.indexOf(user.designation) > -1 : true;
      const experience = filter.experience.length > 0 ? filter.experience.indexOf(user.experience) > -1 : true;
      const location = filter.location.length > 0 ? filter.location.indexOf(user.location) > -1 : true;
      const role = filter.role.length > 0 ? filter.role.indexOf(user.role) > -1 : true;
      const team = filter.team.length > 0 ? filter.team.indexOf(user.team) > -1 : true;
      const yearOfJoining = filter.yearOfJoining.length > 0 ? filter.yearOfJoining.indexOf(user.yearOfJoining) > -1 : true;
      return department && designation && experience && location && role && team && yearOfJoining;
    });
    return ret;
  }

}
