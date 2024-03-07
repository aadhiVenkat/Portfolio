import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}
