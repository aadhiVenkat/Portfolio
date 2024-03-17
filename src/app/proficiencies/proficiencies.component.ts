import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-proficiencies',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule, MatIconModule, MatStepperModule],
  templateUrl: './proficiencies.component.html',
  styleUrl: './proficiencies.component.css'
})
export class ProficienciesComponent {

}
