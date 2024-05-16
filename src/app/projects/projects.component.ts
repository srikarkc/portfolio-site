import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. This project involves...',
      imageUrl: 'assets/project1.jpg',
      link: 'http://linktoproject1.com'
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two. In this project, we...',
      imageUrl: 'assets/project2.jpg',
      link: 'http://linktoproject2.com'
    }
    // Add more projects as needed
  ];

  constructor() { }
}
