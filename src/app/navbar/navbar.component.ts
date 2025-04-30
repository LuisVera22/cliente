import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,LoginModalComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  // Elementos del DOM
  @ViewChild('navbarToggler', { static: false }) navbarToggler!: ElementRef;
  @ViewChild('navbarCollapse', { static: false }) navbarCollapse!: ElementRef;
  @ViewChild('closeBtn', { static: false }) closeBtn!: ElementRef;
  @ViewChild('header', { static: false }) header!: ElementRef;

  isModalVisible: boolean = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addScrollListener();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.addNavbarTogglerListener();
    }
  }

  // Listener para scroll
  addScrollListener(): void {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        this.renderer.addClass(this.header.nativeElement, 'scrolled');
      } else {
        this.renderer.removeClass(this.header.nativeElement, 'scrolled');
      }
    });
  }

  // Navbar toggler
  addNavbarTogglerListener(): void {
    if (this.navbarToggler && this.navbarCollapse) {
      this.renderer.listen(this.navbarToggler.nativeElement, 'click', () => {
        this.toggleNavbar();
      });
    }

    if (this.closeBtn && this.navbarCollapse) {
      this.renderer.listen(this.closeBtn.nativeElement, 'click', () => {
        this.closeNavbar();
      });
    }
  }

  toggleNavbar(): void {
    const collapseEl = this.navbarCollapse.nativeElement;
    if (collapseEl.classList.contains('show')) {
      this.renderer.removeClass(collapseEl, 'show');
    } else {
      this.renderer.addClass(collapseEl, 'show');
    }
  }

  closeNavbar(): void {
    if (this.navbarCollapse) {
      this.renderer.removeClass(this.navbarCollapse.nativeElement, 'show');
    }
  }

  openModal(): void {
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }
}
