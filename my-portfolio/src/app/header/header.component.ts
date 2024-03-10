import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule,MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild("base", {static: false}) base! : ElementRef;
  @ViewChild("about", {static: false}) about! : ElementRef;
  @ViewChild("skills", {static: false}) skills! : ElementRef;
  @ViewChild("proficiencies", {static: false}) proficiencies! : ElementRef;
  @ViewChild("contact", {static: false}) contact! : ElementRef;

  constructor(private eleRef:ElementRef){}

  scrollToTarget(target:string) {
  //  var headDiv = this.eleRef.nativeElement.querySelector('.toolbar').offsetHeight;
  //  var targetDiv = this.base?.nativeElement.offsetTop - headDiv;
  //  debugger
  //  switch(target){
  //   case "base":
  //     targetDiv = this.base?.nativeElement.offsetTop - headDiv;
  //     break;
  //   case "about":
  //     targetDiv = this.about?.nativeElement.offsetTop - headDiv;
  //     break;
  //   case "skills":
  //     targetDiv = this.skills?.nativeElement.offsetTop - headDiv;
  //     break;
  //   case "proficiencies":
  //     targetDiv = this.proficiencies?.nativeElement.offsetTop - headDiv;
  //     break;
  //   case "contact":
  //     targetDiv = this.contact?.nativeElement.offsetTop - headDiv;
  //     break;
  //  }
   const targetElement = document.getElementById(target);
   targetElement?.scrollIntoView({behavior:'smooth', block:'start'})
  //  window.scrollTo({top:targetDiv, behavior:'smooth'});
}
 
}
