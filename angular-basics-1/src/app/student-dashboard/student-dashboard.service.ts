import { HttpClient } from "@angular/common/http";
import { Students } from "../models/student-dashboard.interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const STUDENTS_API : string = 'http://localhost:3000/students';

@Injectable()
export class StudentDashboadService {
    constructor(private httpClient: HttpClient){
      console.log(httpClient);
    }

    getStudent(): Observable<Students[]> {  
      return this.httpClient.get<Students[]>(STUDENTS_API);
    }
}