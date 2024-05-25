import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthResponse } from '../../interfaces/res-interface';

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
          (res: string | undefined) => {
            if (res && res.includes('.')) {
              const tokenData = JSON.parse(atob(res.split('.')[1]));
              if (tokenData && tokenData.userId) {
                this.router.navigateByUrl('/dashboard');
                this.toastr.success('Ingreso correcto', 'Success');
                return;
              }
            }
            console.error('Error de autenticación:', res);
            this.toastr.error('Credenciales inválidas', 'Error');
          },
          error => {
            console.error('Error al iniciar sesión:', error);
            this.toastr.error('Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo.', 'Error');
          }
        );
    } else {
      this.toastr.error('Verifique sus datos', 'Error');
    }
  }
  
  
  
}
