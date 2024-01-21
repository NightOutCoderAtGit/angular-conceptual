import { Component, OnInit } from "@angular/core";
import { Students } from "../../../models/student-dashboard.interface";
import { StudentDashboadService } from "../../student-dashboard.service";


@Component({
    selector: 'student-dashboard',
    styleUrls: ['student-dashboard.component.scss'],
    template: `
        <div>
          <student-count
            [data] = "students">
          </student-count>
          <div *ngFor="let student of students;">
            {{ student.name }}
          </div>
          <student-details
          *ngFor="let student of students"
          [details]="student"
          (remove)="handleRemove($event)"
          (edit)="handleEdit($event)"
          >
          </student-details>
        </div>
      <div>
      </div>
    `
})
export class StudentDashboardComponent implements OnInit {
  students: Students[] = [];

    constructor(private studentDashboardService: StudentDashboadService){
      console.log('--Constructor Student Dashboard--');
    }

    /******************************Via subscribe******************************/
    ngOnInit(): void {
      console.log('--ngOnInit Student Dashboard--');
      this.studentDashboardService.getStudents().subscribe((data: Students[]) => {
        console.log(data);
        this.students = data;
      })
    }

    handleRemove(event: Students){
      this.studentDashboardService.removeStudent(event)
      .subscribe((data) => {
        this.students = this.students.filter((data)=>{
          return data.id != event.id;
        })
        console.log(event);
      });
    }
    
    handleEdit(event: Students) {
      this.studentDashboardService.updateStudent(event)
      .subscribe((data: Students) => {
        this.students.map((student: Students) => {
          if(student.id === event.id) {
            student =  Object.assign({}, student, event);
          }
          return this.students;
        })
        console.log(this.students);
        console.log(event);
      });
    }
     /******************************Via Observables******************************/
}