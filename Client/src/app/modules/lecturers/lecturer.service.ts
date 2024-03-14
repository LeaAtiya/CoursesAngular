import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Lecturer } from "./lecturer.model";

@Injectable()
export class LecturerService{
    apiURL:string="https://localhost:7035/";
    getLecturers(): Observable<Lecturer[]> {
        return this._http.get<Lecturer[]>(this.apiURL+"api/Lecturer");
    }
    addLecturer(lecturer:Lecturer):Observable<boolean>{
        return this._http.post<boolean>(this.apiURL+"api/Lecturer",lecturer);
    }
    constructor(private _http: HttpClient) {

    }
}
