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
    { id: 1, thumbnailPath: 'assets/images/wallpaper1.jpg', title: 'Project A', usedSkills: ['Skill A1', 'Skill A2'] },
    { id: 2, thumbnailPath: 'assets/images/wallpaper2.jpg', title: 'Project B', usedSkills: ['Skill B1', 'Skill B2'] },
    { id: 3, thumbnailPath: 'assets/images/wallpaper3.jpg', title: 'Project C', usedSkills: ['Skill C1', 'Skill C2'] },
    { id: 4, thumbnailPath: 'assets/images/wallpaper4.jpg', title: 'Project D', usedSkills: ['Skill D1', 'Skill D2'] }
  ]

  scrollToSection(event: Event){
    (event.target as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  }
  selectProjectCategory(itemIndex: number){
    this.selectedProjectCategory = this.projectCategories[itemIndex];
  }
}
