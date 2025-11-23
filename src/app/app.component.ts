import { Component, OnInit } from '@angular/core';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';
import { SkillsComponent } from './skills/skills.component';
import { ProficienciesComponent } from './proficiencies/proficiencies.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[AboutComponent, MatCardModule, HeaderComponent, BaseComponent, SkillsComponent,ProficienciesComponent, ProjectsComponent, ContactComponent]
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Theme service will automatically initialize the theme
  }
}
