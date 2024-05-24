import { Injectable } from '@angular/core';
import {enviroment} from 'src/environments/enviroment'
import {user} from '../interfaces/us-interface'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = enviroment.baseUrl;
  private _user! : user;

  get user(){
    return{...this._user}
  }

  constructor(private http: HttpClient) { }

  register(usname: string, pass: string, email:string){
    const URL = `${this.baseUrl}/auth/new`;
    const body = {usname, pass, email};

  }

  login(usname: string, pass: string){
    const URL = `${this.baseUrl}/auth/login`;
    const body = {usname, pass};

    return this.http.post(URL, body);
  }

  validateToken(){
    
  }



  
}
