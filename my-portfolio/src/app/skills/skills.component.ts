import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  FrontEndList = [
    {
      id:1,
      imgSrc:"../../assets/images/HTML.png",
      shadow:"shadow-orange-500",
      alt:"html.png",
      title:"HTML",
      rating:4
    },
    {
      id:2,
      imgSrc:"../../assets/images/CSS.png",
      shadow:"shadow-blue-600",
      alt:"CSS.png",
      title:"CSS",
      rating:4
    },
    {
      id:3,
      imgSrc:"../../assets/images/JS.png",
      shadow:"shadow-yellow-600",
      alt:"JS.png",
      title:"Java Script",
      rating:4
    },
    {
      id:4,
      imgSrc:"../../assets/images/Bootstrap.png",
      shadow:"shadow-violet-700",
      alt:"Bootstrap.png",
      title:"Bootstrap",
      rating:4
    },
    {
      id:5,
      imgSrc:"../../assets/images/Angular.png",
      shadow:"shadow-red-700",
      alt:"Angular.png",
      title:"Angular",
      rating:4
    },
    {
      id:6,
      imgSrc:"../../assets/images/Material.png",
      shadow:"shadow-amber-700",
      alt:"Material.png",
      title:"Material",
      rating:4
    },
    {
      id:7,
      imgSrc:"../../assets/images/TS.png",
      shadow:"shadow-blue-500/50",
      alt:"TS.png",
      title:"Typescript",
      rating:4
    },
    {
      id:8,
      imgSrc:"../../assets/images/Ag-Grid.png",
      shadow:"shadow-indigo-500",
      alt:"Ag-Grid.png",
      title:"AG-Grid",
      rating:4
    }
  ]

  BackEndList= [
    {
      id:1,
      imgSrc:"../../assets/images/HTML.png",
      shadow:"shadow-orange-500",
      alt:"html.png",
      title:"HTML",
      rating:4
    },
  ]
}
