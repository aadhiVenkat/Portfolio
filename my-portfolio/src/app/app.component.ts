import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { BaseComponent } from './base/base.component';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[AboutComponent, MatCardModule, HeaderComponent, BaseComponent]
})
export class AppComponent {
  title = 'my-portfolio';
}
