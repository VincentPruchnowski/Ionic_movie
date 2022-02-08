import { Injectable } from '@angular/core';

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  photoUrl?: string;
  status?: 'present' | 'absent';
}



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private currentStudent: Student;
  Students: Student[] = [
    { id: '1', firstName: 'Pierre', lastName: 'Dir' },
    { id: '2', firstName: 'Joe', lastName: 'Ferre' },
    { id: '3', firstName: 'Henry', lastName: 'Dir', status: 'present' },
    { id: '4', firstName: 'Zoe', lastName: 'Barns', status: 'absent' },
    { id: '5', firstName: 'Ben', lastName: 'Hope' },
  ];

  constructor() {}

  public getAll(): Student[] {
    return this.Students;
  }
  public create(student: Student) {
    this.Students.push(student);
  }
  public get(id: string): Student[] {
    return null;
  }
  public update(student: Student) {}
  public delete(student: Student) { }
  
  public getCurrent(): Student {
    return this.currentStudent;
  }
  public setCurrent(student: Student) {
    this.currentStudent = student;
  }
}
