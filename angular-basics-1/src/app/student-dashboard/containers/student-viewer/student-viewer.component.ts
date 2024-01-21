import { Component, OnInit } from "@angular/core";
import { Students } from "../../../models/student-dashboard.interface";
import { StudentDashboadService } from "../../student-dashboard.service";

@Component({
 selector: 'student-viewer',
 styles: ['student-viewer.component.scss'],
 template: `
    <div>
        {{ student | json }}
    </div>
     `
})
export class StudentViewerComponent implements OnInit {

    student?: Students;

    constructor(private studentDashboardService: StudentDashboadService) {
    }

    ngOnInit(){
        this.studentDashboardService.getStudent(123)
                        .subscribe((data) => {
                this.student = data;
                })
    }
}