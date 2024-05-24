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

  private baseUrl: string = environment.baseUrl;
  private _user! : user;

  get user(){
    return{...this._user}
  }

  constructor(private http: HttpClient) { }

  register(usname: string, pass: string, email:string){
    const URL = `${this.baseUrl}/users/auth/new`;
    const body = {usname, pass, email};

  }

  login(username: string, password: string): Observable<string | undefined> {
    const URL = `http://localhost:3000/auth/login`;
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


  validateToken(){
    
  }



  
}
