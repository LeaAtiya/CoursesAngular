import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "./category.model";

@Injectable()
export class CategoryService {
    apiURL:string="https://localhost:7035/";

    getCategoriesFromServer(): Observable<Category[]> {
        return this._http.get<Category[]>(this.apiURL+"api/Category");
    }

    constructor(private _http: HttpClient) {

    }
}
