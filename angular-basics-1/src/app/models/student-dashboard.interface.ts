export interface Guardian {
    name: string,
    age: number
  }
  
export interface Students {
    id :number,
    name : string,
    isEnrolled: boolean,
    enrollDate?: number | null,
    guardian?: Guardian[] | null
  }