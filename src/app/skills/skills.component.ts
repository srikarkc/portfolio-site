import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: number; // number of stars out of 5
  category: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class SkillsComponent {
  skills: Skill[] = [
    // DevOps skills
    { name: 'Docker', level: 4, category: 'DevOps' },
    { name: 'CI/CD Pipelines', level: 4, category: 'DevOps' },
    { name: 'Kubernetes', level: 5, category: 'DevOps' },
    { name: 'Terraform', level: 4, category: 'DevOps' },
    { name: 'AWS', level: 5, category: 'DevOps' },
    { name: 'Ansible', level: 3, category: 'DevOps' },
    { name: 'Google Cloud Platform', level: 3, category: 'DevOps' },
    { name: 'Network (OSI Layer 1 - 4)', level: 4, category: 'DevOps' },

    // Development skills
    { name: 'Java', level: 5, category: 'Development' },
    { name: 'JavaScript/TypeScript', level: 5, category: 'Development' },
    { name: 'Python', level: 5, category: 'Development' },
    { name: 'Angular', level: 4, category: 'Development' },
    { name: 'SQL', level: 4, category: 'Development' },
    { name: 'Data Structures & Algorithms', level: 3, category: 'Development' },
    { name: 'Design Patterns', level: 2, category: 'Development' },

    // Mechanical engineering skills with a tech focus
    { name: 'CAD Design with Solidworks', level: 5, category: 'Mechanical' },
    { name: 'Finite Element Analysis (FEA)', level: 4, category: 'Mechanical' },
    { name: 'Computational Fluid Dynamics (CFD)', level: 4, category: 'Mechanical' },
    { name: '3D Printing', level: 4, category: 'Mechanical' },
    { name: 'Failure Method & Effect Analysis', level: 4, category: 'Mechanical' }
];


  selectedCategory: string = 'All';

  get filteredSkills() {
    return this.selectedCategory === 'All' ? this.skills : this.skills.filter(skill => skill.category === this.selectedCategory);
  }
}
