import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    LoginModalComponent,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild('navbarCollapse') navbarCollapse!: ElementRef;
  @ViewChild(LoginModalComponent) loginModal!: LoginModalComponent;
  
  isScrolled = false;
  isLoginModalVisible = false;
  isLogged = false;

  ngOnInit(): void {
    this.isLogged = !!localStorage.getItem('user');
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleNavbar(): void {
    const el = this.navbarCollapse?.nativeElement;
    if (el) {
      el.classList.toggle('show');
    }
  }

  closeNavbar(): void {
    const el = this.navbarCollapse?.nativeElement;
    if (el) {
      el.classList.remove('show');
    }
  }

  openLoginModal(): void {
    this.isLoginModalVisible = true;
  }

  onLoginModalClose(): void {
    this.isLoginModalVisible = false;
  }

  logout(): void {
    this.isLogged = false;
    localStorage.removeItem('user');
    this.closeNavbar();
    
    console.log('Sesión cerrada');
  }
}
