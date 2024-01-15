import { Students } from "../models/student-dashboard.interface";

export class StudentDashboadService {
    constructor(){

    }

    getStudent(): Students[] {
        return [
            {
              id:123,
              name: 'John',
              isEnrolled: true,
              enrollDate: 19873243243,
              guardian: [{ name: 'Rita', age: 45}]
            },
            {
              id:323,
              name: 'Tohn',
              isEnrolled: false,
              enrollDate: null,
              guardian: [{ name: 'Lita', age: 45}]
            },
            {
              id:143,
              name: 'Sohn',
              isEnrolled: false,
              guardian: null
            },
            {
              id:356,
              name: 'Zohn',
              isEnrolled: false,
            },
            {
              id:423,
              name: 'Rohn',
              isEnrolled: true,
              enrollDate: 1243243243,
              guardian: [{ name: 'Nita', age: 55}, { name: 'Lita', age: 65}]
            },
          ];
    }
}