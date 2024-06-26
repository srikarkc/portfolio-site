import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReadingComponent } from './reading/reading.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent
},{
    path: 'about',
    component: AboutComponent
},{
    path: 'skills',
    component: SkillsComponent
},{
    path: 'projects',
    component: ProjectsComponent
},{
    path: 'resume',
    component: ResumeComponent
},{
    path: 'contact',
    component: ContactComponent
},{
    path: 'reading',
    component: ReadingComponent
}

];