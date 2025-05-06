import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../../models/Login-Request/login-request';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Output() close = new EventEmitter<void>();
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    
    this.isLoading = true;
    this.errorMessage = null;
    
    const loginData: LoginRequest = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    
    this.authService.login(loginData).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify(response));
        this.router.navigate(['/publicar-inmueble']);
        this.closeModal();
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.status === 400 
          ? 'Credenciales incorrectas' 
          : 'Error en el servidor';
      }
    });
  }

  closeModal(): void {
    this.close.emit();
  }
}
