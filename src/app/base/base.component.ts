import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { repeat } from 'rxjs';
declare var Typed: any;
@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent implements OnInit {
  ngOnInit(): void {
    const typed = new Typed('#element', {
      strings: ['Fullstack Developer', 'Fullstack Web Developer', 'Fullstack Engineer'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    });
  }

}
