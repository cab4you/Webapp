import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  readonly APIUrl = "https://api.cab4you.in/api";
    constructor(private http: HttpClient) {}
    getCabList(): Observable < any[] > {
        return this.http.get < any > (this.APIUrl + '/Auth/88510/password');
    }
    addCabDetails(val: any) {
        return this.http.post(this.APIUrl + '/Student', val);
    }
    updateStudent(val: any) {
        return this.http.put(this.APIUrl + '/Student', val);
    }
    deleteStudent(id: any) {
        return this.http.delete(this.APIUrl + '/Student/' + id);
    }
    getDepartmentList(): Observable < any[] > {
        return this.http.get < any > (this.APIUrl + '/Department');
    }
    addDepartment(val: any) {
        return this.http.post(this.APIUrl + '/Department', val);
    }
    updateDepartment(val: any) {
        return this.http.put(this.APIUrl + '/Department', val);
    }
    deleteDepartment(id: any) {
        return this.http.delete(this.APIUrl + '/Department/' + id);
    }
}
