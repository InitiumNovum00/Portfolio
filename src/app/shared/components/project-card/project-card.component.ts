import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styles: [
  ]
})
export class ProjectCardComponent {
  @Input() id = 0;
  @Input() thumbnailPath = 'assets/images/wallpaper1.jpg';
  @Input() title = 'Project A';
  @Input() usedSkills: string[] = [];

  get usedSkillsList(){
    return this.usedSkills.join(' / ');
  }
}
