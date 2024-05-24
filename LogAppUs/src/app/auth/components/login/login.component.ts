import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'Username';

  formularioLog: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router, 
 
  ){
    // Configuración de los validadores en el constructor
    this.formularioLog = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]], // Validadores agrupados en una matriz
      pass: ['', [Validators.required, Validators.minLength(6)]] // Validadores agrupados en una matriz
    });
  }

  login(): void {
    console.log(this.formularioLog.value);
    console.log(this.formularioLog.valid);
    this.router.navigateByUrl('/dashboard');
  }
}
