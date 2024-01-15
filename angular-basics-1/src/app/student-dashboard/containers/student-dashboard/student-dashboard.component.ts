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

    ngOnInit(): void {
      console.log('--ngOnInit Student Dashboard--');
      this.studentDashboardService.getStudent().subscribe((data: Students[]) => {
        console.log(data);
        this.students = data;
      })
      //   {
      //     id:123,
      //     name: 'John',
      //     isEnrolled: true,
      //     enrollDate: 19873243243,
      //     guardian: [{ name: 'Rita', age: 45}]
      //   },
      //   {
      //     id:323,
      //     name: 'Tohn',
      //     isEnrolled: false,
      //     enrollDate: null,
      //     guardian: [{ name: 'Lita', age: 45}]
      //   },
      //   {
      //     id:143,
      //     name: 'Sohn',
      //     isEnrolled: false,
      //     guardian: null
      //   },
      //   {
      //     id:356,
      //     name: 'Zohn',
      //     isEnrolled: false,
      //   },
      //   {
      //     id:423,
      //     name: 'Rohn',
      //     isEnrolled: true,
      //     enrollDate: 1243243243,
      //     guardian: [{ name: 'Nita', age: 55}, { name: 'Lita', age: 65}]
      //   },
      // ];
    }

    handleRemove(event: Students){
      this.students = this.students.filter((data)=>{
        return data.id != event.id;
      })
      console.log(event);
    }
    
    handleEdit(event: Students) {
      this.students.map((student: Students) => {
        if(student.id === event.id) {
          student =  Object.assign({}, student, event);
        }
        return this.students;
      })
      console.log(this.students);
      console.log(event);
    }
  }