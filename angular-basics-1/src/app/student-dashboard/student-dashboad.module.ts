import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentDashboardComponent } from "./containers/student-dashboard/student-dashboard.component";
import { StudentCount } from "./components/student-count/student-count.component";
import { StudentDetails } from "./components/student-details/student-details.component";


@NgModule({
    declarations: [
            // All the component of this module
            StudentDashboardComponent,
            StudentCount,
            StudentDetails
    ],
    imports: [
        CommonModule
    ],
    exports:[
        StudentDashboardComponent,
    ]
})
export class StudentDashboardMoudle {

}