import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[AboutComponent, MatCardModule]
})
export class AppComponent {
  title = 'my-portfolio';
}
