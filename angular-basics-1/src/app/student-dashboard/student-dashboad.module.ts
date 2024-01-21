import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentDashboardComponent } from "./containers/student-dashboard/student-dashboard.component";
import { StudentCount } from "./components/student-count/student-count.component";
import { StudentDetails } from "./components/student-details/student-details.component";
import { StudentDashboadService } from "./student-dashboard.service";
import { HttpClientModule } from "@angular/common/http";
import { StudentViewerComponent } from "./containers/student-viewer/student-viewer.component";


@NgModule({
    declarations: [
            // All the component of this module
            StudentDashboardComponent,
            StudentCount,
            StudentDetails,
            StudentViewerComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports:[
        StudentDashboardComponent,
        StudentViewerComponent
    ],
    providers: [
        StudentDashboadService
    ]
})
export class StudentDashboardMoudle {

}