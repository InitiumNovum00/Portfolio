import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fullName = 'Leonel Rocha Nascimento';
  role = 'desenvolvedor web full-stack';
  internalLinks = [
    { text: 'Home', section: 'home' },
    { text: 'Projectos', section: 'projects' },
    { text: 'Sobre Mim', section: 'about' },
    { text: 'Contacto', section: 'contact'}
  ];
  projectCategories = [
    'Todos', 'Angular', 'ASP.NET Core', 'JavaScript'
  ];
  selectedProjectCategory = 'Todos';
  projects = [
    { id: 1, title: 'Project A', skillsUsed: ['Skill A1', 'Skill A2'] },
    { id: 2, title: 'Project B', skillsUsed: ['Skill B1', 'Skill B2'] },
    { id: 3, title: 'Project C', skillsUsed: ['Skill C1', 'Skill C2'] },
    { id: 4, title: 'Project D', skillsUsed: ['Skill D1', 'Skill D2'] }
  ]

  scrollToSection(event: Event){
    (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
  selectProjectCategory(itemIndex: number){
    this.selectedProjectCategory = this.projectCategories[itemIndex];
  }
}
