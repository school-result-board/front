import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Result} from './model/result';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly RESULT_API = '/api/result-service';

  constructor(private http: HttpClient) {
  }

  getResultForStudent(studentId: string): Observable<Result> {
    return this.http.get<Result>(`${this.RESULT_API}/v1/result/${studentId}`);
  }
}
