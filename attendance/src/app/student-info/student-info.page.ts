import { Component, OnInit } from '@angular/core';
import { Student, StudentService } from '../student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.page.html',
  styleUrls: ['./student-info.page.scss'],
})
export class StudentInfoPage implements OnInit {
  public student: Student;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.student = this.studentService.getCurrent();
  }
}
