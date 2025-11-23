import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

declare var Typed: any;

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, MatCardModule],
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
          'Fullstack Developer',
          'Fullstack Web Developer',
          'Fullstack Engineer',
          'Fullstack .NET Developer'
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

  ngOnDestroy(): void {
    if (this.typedInstance) {
      this.typedInstance.destroy();
    }
  }
}
