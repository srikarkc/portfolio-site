import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentActivities = [
    { description: 'Developing this blog while learning Angular Framework.' },
    { description: 'Professional Data Engineer - GCP certification.' },
    { description: 'Java Programming w/ focus on Spring Framework.' }
  ];

  timeline = [
    { year: 'April 2023 - current', description: 'Leading DevOps projects for Fleet Health Explorer application at Boeing.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Boeing_full_logo.svg/2560px-Boeing_full_logo.svg.png' },
    { year: 'Sept 2021 - March 2023', description: 'Cloud Operations for FortiMail, FortiVoice, FortiSwitch at Fortinet.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fortinet_logo.svg/1200px-Fortinet_logo.svg.png' },
    // { year: 'January 2021 - Sept 2021', description: 'Leading Industrial Engineering operations at National Steel car.' },
    // { year: 'February 2020 - December 2020', description: 'QA weld inspector at National Steel Car.' },
    { year: 'September 2018 - December 2019', description: 'Master of Engineering at University of Windsor.', image: 'https://www.uwindsor.ca/engineering/sites/uwindsor.ca.engineering/files/uwindsor-engineering-logo-new.png' },
    { year: 'August 2014 - May 2018', description: 'Bachelor of Technology at Sardar Vallabhbhai National Institute of Technology.', image: 'https://d2lk14jtvqry1q.cloudfront.net/media/small_Sardar_Vallabhbhai_National_Institute_of_Technology_SVNIT_Surat_9f6af30b6a_97125b5283.png' },
    { year: 'Sept 2001 - April 2014', description: 'Indian School Muscat', image: 'https://ismoman.com/images/logo.png'},
  ];

  isRight(index: number): boolean {
    return index % 2 === 0;
  }
}