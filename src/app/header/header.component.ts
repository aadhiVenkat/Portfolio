import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { APP_CONSTANTS } from '../constants/app.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  isScrolled = false;
  activeSection = 'base';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  scrollToTarget(target: string): void {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveSection(): void {
    const sections = Object.values(APP_CONSTANTS.SECTIONS);
    const scrollPosition = window.scrollY + 150;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }
}
