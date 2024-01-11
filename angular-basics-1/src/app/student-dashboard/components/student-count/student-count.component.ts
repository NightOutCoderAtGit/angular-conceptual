import { Input, NgModule, OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Students } from "../../../models/student-dashboard.interface";

@Component({
selector: 'student-count',
styleUrls: ['student-count.component.scss'],
template: `
    <p>
        Total Counts : {{ isEnrolledCount() }} / {{ data.length }}
    </p>
    `
})
export class StudentCount implements OnInit {

    @Input() data: Students[] = [];

    isEnrolledCount() : number{
        if(!this.data) return 0;
        return this.data.filter((student: Students) => student.isEnrolled).length;
    }

    constructor(){
        console.log('Student Count constructor Component');
    }

    ngOnInit(){
        console.log('Student Count ngOnInit Component');
    }
}