import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, fully responsive portfolio website designed to showcase my professional journey, technical skills, and project portfolio. This single-page application features smooth scrolling navigation, lazy-loaded components for optimal performance, and a clean, professional UI built with Angular and Material Design. The site includes sections for About, Skills, Proficiencies, Projects, and Contact, all seamlessly integrated with a responsive design that works beautifully on all devices. Deployed on Firebase Hosting for fast and reliable access.',
      technologies: ['Angular', 'Material UI', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Firebase'],
      githubUrl: 'https://github.com/aadhivenkat',
      liveUrl: 'https://aadhi-venkat-portfolio.web.app/',
      imageUrl: '../../assets/images/Logo.png',
      features: ['Responsive Design', 'Lazy Loading', 'Smooth Scrolling', 'Material Design', 'Firebase Hosting']
    },
    {
      id: 2,
      title: 'Todo App',
      description: 'A fully functional and intuitive todo application built with React and JavaScript that helps users manage their daily tasks efficiently. The app provides a clean and user-friendly interface for creating, editing, and deleting tasks. It demonstrates core React concepts including component architecture, hooks, and state management. The application is deployed on GitHub Pages and showcases modern web development practices with a focus on user experience and simplicity.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/aadhivenkat/ToDo-app',
      liveUrl: 'https://aadhivenkat.github.io/ToDo-app/',
      imageUrl: '../../assets/images/Logo.png',
      features: ['Task Management', 'Add/Edit/Delete', 'Clean UI', 'GitHub Pages']
    }
  ];
}
