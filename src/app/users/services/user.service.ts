import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { throwError, catchError } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})

export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(catchError(this.handleError))
      .pipe(map((response) => response.data));
  }

  createUser(user: User): Observable<User> {
    return this.http
      .post<any>(this.apiUrl, user)
      .pipe(catchError(this.handleError));
  }

  updateUser(user: User): Observable<User> {
    return this.http
      .put<any>(`${this.apiUrl}/${user.id}`, user)
      .pipe(catchError(this.handleError));
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    let errorMessage = 'Wystąpił nieoczekiwany błąd.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Błąd: ${error.error.message}`;
    } else {
      errorMessage = `Błąd serwera: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
