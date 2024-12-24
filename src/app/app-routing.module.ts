import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component: HomeComponent
  },

  {
    path:"Home",
    component: HomeComponent
  },{
    path:"Projects",
    component:ProjectsComponent
  },
  {
    path:"Contactus",
    component:ContactusComponent
  },
  {
    path:"Aboutus",
    component:AboutusComponent
  },
  {
    path:"Assignments",
    component:AssignmentsComponent
  },
  {
    path:"**",
    pathMatch:"full",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
