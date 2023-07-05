import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOutlineComponent } from './course-outline/course-outline.component';
import { CourseComponent } from './course/course.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: CourseComponent
  },
  
  {
    path: 'course',
    component: CourseComponent
  },
   {
     path: 'course-outline/:id',
     component: CourseOutlineComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
