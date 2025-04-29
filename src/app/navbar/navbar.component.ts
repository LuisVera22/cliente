import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,LoginModalComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  // Navbar
  constructor(private render: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addScrollListener();
      this.addNavbarScrollListener();
      this.addNavbarTogglerListener();
      this.addLoginFormAnimations();
    }
  }

  // Listener de scroll
  addNavbarScrollListener(): void {
    const header = document.querySelector('.custom-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    });
  }

  // Listener para el navbar-toggler
  addNavbarTogglerListener(): void {
    const navbarToggler = document.getElementById("navbarToggler");
    const closeBtn = document.getElementById("closeBtn");
    const navbarCollapse = document.getElementById("navbarSupportedContent");

    if (navbarToggler && navbarCollapse) {
      navbarToggler.addEventListener("click", () => {
        navbarCollapse.classList.toggle("show");
      });
    }

    if (closeBtn && navbarCollapse) {
      closeBtn.addEventListener("click", this.closeMenuAnimation);
    }
  }

  // Cierre del menú (sin animación ahora)
  closeMenuAnimation(): void {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    navbarCollapse?.classList.remove("show");
  }

  // Cierre del menú
  closeNavbar(): void {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  }

  // Formulario de login
  addLoginFormAnimations(): void {
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.getElementById('login-form');
    const formCloseBtn = document.getElementById('close-btn');

    if (loginBtn && loginForm && formCloseBtn) {
      const hideForm = () => {
        loginForm.style.display = 'none';
      };

      loginBtn.addEventListener('click', () => {
        loginForm.style.display = 'flex';
      });
      formCloseBtn.addEventListener('click', hideForm);

      // Cerrar el formulario al hacer clic fuera de él
      loginForm.addEventListener('click', function (event) {
        if (event.target === loginForm) {
          hideForm();
        }
      });
    }
  }

  addScrollListener(): void {
    const header = document.querySelector('.custom-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        this.render.addClass(header, 'scrolled');
      } else {
        this.render.removeClass(header, 'scrolled');
      }
    });
  }

  // Modal de Login
  isModalVisible: boolean = false;

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
