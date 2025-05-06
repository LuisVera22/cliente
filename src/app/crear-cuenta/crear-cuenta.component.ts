import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario/usuario';
import { CustomValidators } from '../models/validators/custom-validators';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-crear-cuenta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {
  registerForm: FormGroup;
  isLoading = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellidos: [''],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{9,15}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: CustomValidators.match('password', 'confirmPassword')
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.successMessage = null;
    this.errorMessage = null;

    const userData : Usuario = {
      email: this.registerForm.value.email,
      nombre: `${this.registerForm.value.nombre} ${this.registerForm.value.apellidos}`.trim(),
      telefono: this.registerForm.value.telefono,
      password: this.registerForm.value.password,
      tipo: 'CLIENTE'
    };

    this.authService.register(userData).subscribe({
      next: (response) => {
        this.successMessage = 'Registro exitoso! Redirigiendo...';
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error: (error) => {
        this.errorMessage = error.error?.message || 'Error en el registro. Intente nuevamente.';
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}
