import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UserService {
    apiURL:string="https://localhost:7035/";
    getUsersFromServer(): Observable<User[]> {
        return this._http.get<User[]>(this.apiURL+"api/User");
    }

    addUser(user:User):Observable<boolean>{
        return this._http.post<boolean>(this.apiURL+"api/User",user);
    }
    
    constructor(private _http: HttpClient) {

    }
}