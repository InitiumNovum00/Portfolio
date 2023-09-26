import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
  { path: 'projects', loadChildren: () => import('./features/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'projects/:id', loadChildren: () => import('./features/project-details/project-details.module').then(m => m.ProjectDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
