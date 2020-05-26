import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SearchFilterFields} from '../search.interface';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Input() searchFilterFields: SearchFilterFields;
  @Output() selectedFilter = new EventEmitter<SearchFilterFields>();
  department = new FormControl();
  role = new FormControl();
  designation = new FormControl();
  experience = new FormControl();
  yearOfJoining = new FormControl();
  location = new FormControl();
  team = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  onApply(): void {
    const filters: SearchFilterFields = {
      department: this.department.value ? this.department.value : [],
      designation: this.designation.value ? this.designation.value : [],
      experience: this.experience.value ? this.experience.value : [],
      location: this.location.value ? this.location.value : [],
      role: this.role.value ? this.role.value : [],
      team: this.team.value ? this.team.value : [],
      yearOfJoining: this.yearOfJoining.value ? this.yearOfJoining.value : []
    };
    this.selectedFilter.emit(filters);
  }

  onCancel(): void {
    this.department.setValue(null);
    this.role.setValue(null);
    this.designation.setValue(null);
    this.experience.setValue(null);
    this.location.setValue(null);
    this.team.setValue(null);
    this.yearOfJoining.setValue(null);
    this.selectedFilter.emit(this.searchFilterFields);
  }
}
