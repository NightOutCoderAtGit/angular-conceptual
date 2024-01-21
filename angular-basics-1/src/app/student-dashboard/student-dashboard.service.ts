import { HttpClient, } from "@angular/common/http";
import { Students } from "../models/student-dashboard.interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const STUDENTS_API : string = 'http://localhost:3000/students';

@Injectable()
export class StudentDashboadService {
    constructor(private httpClient: HttpClient){
      console.log(httpClient);
    }

    /**********************Via RxJs Observable**********************/
    /*Get Operation*/
    getStudents(): Observable<Students[]> {  
      return this.httpClient.get<Students[]>(STUDENTS_API)
    }

    /*Get Operation*/
    getStudent(id: number): Observable<Students> {  
      return this.httpClient.get<Students>(`${STUDENTS_API}/${id}`)
    }

    /*Update Operation*/
    updateStudent(student: Students): Observable<Students> {  
      return this.httpClient.put<Students>(`${STUDENTS_API}/${student.id}`,student);
    }

    /*Delete Operation*/
    removeStudent(student: Students): Observable<Students> {  
      return this.httpClient.delete<Students>(`${STUDENTS_API}/${student.id}`);
    }
}