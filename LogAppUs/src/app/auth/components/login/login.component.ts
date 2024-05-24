import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formularioLog: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router, 
    private authService: AuthService,
    private toastr: ToastrService
  ) {
    // Configuración de los validadores en el constructor
    this.formularioLog = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      pass: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.formularioLog.valid) {
      const { username, pass } = this.formularioLog.value;
      this.authService.login(username, pass)
      .subscribe(
        () => {
          this.router.navigateByUrl('/dashboard');
          this.toastr.success('Ingreso correcto', 'Success', {
            timeOut: 4000,
            progressAnimation: 'increasing'
          });
        },
        error => {
          console.error(error);
          this.toastr.error('Credenciales inválidas', 'Error', {
            timeOut: 4000,
            progressAnimation: 'increasing'
          });
        }
      );
    } else {
      this.toastr.error('Verifique sus datos', 'Error', {
        timeOut: 4000,
        progressAnimation: 'increasing'
      });
    }
  }
}
