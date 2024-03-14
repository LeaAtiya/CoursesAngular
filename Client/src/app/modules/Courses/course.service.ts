import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "./course.model";

@Injectable()
export class CourseService {
    apiURL:string="https://localhost:7035/";
    getCoursesFromServer(): Observable<Course[]> {
        return this._http.get<Course[]>(this.apiURL+"api/Course");
    }

    addCourse(course:Course):Observable<boolean>{
        return this._http.post<boolean>(this.apiURL+"api/Course",course);
    }
    editCourse(id:number ,course:Course):Observable<boolean>{
        return this._http.put<boolean>(this.apiURL+"api/Course/"+id,course);
    }

    constructor(private _http: HttpClient) {

    }
}