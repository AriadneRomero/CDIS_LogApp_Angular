import { Injectable } from '@angular/core';
import {environment} from 'src/environments/enviroment'
import {user} from '../interfaces/us-interface'
import { HttpClient } from '@angular/common/http';
import {AuthResponse} from '../interfaces/res-interface'
import { Observable, of } from 'rxjs';
import {tap, map, catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<string | undefined> {
    const URL = `${this.baseUrl}/auth/login`;
    const body = { username, password };

    return this.http.post<AuthResponse>(URL, body).pipe(
      tap(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
        }
      }),
      map(res => res.token),
      catchError(err => {
        if (err.error && err.error.message) {
          return of(err.error.message);
        } else {
          return of('An unknown error occurred.');
        }
      })
    );
  }
}


  

