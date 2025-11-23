import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

declare var Typed: any;

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements OnInit, OnDestroy {
  private typedInstance: any;

  ngOnInit(): void {
    // Initialize Typed.js after a short delay to ensure DOM is ready
    setTimeout(() => {
      this.typedInstance = new Typed('#element', {
        strings: [
          'Full-Stack Developer',
          'Full-Stack Web Developer',
          'Full-Stack Engineer',
          'Full-Stack .NET Developer'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        showCursor: true,
        cursorChar: '|',
        loop: true,
        smartBackspace: true
      });
    }, 100);
  }

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const headerOffset = 80;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = '../../assets/images/VENKATAADINARAYANA.pdf';
    link.download = 'Venkata_Adi_Narayana_P';
    link.target = '_blank';
    link.click();
  }

  ngOnDestroy(): void {
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
