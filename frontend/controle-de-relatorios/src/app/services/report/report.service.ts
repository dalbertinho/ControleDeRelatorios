import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReportService {

  constructor(private http:HttpClient) { }

  getReport(id) {
    return this.http.get('http://localhost:3000/report/' + id);
  }
}
