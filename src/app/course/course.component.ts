import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    
  ) { }

  
  courses = this.heroService.courses

  
  ngOnInit(): void {
   
    
  }

}
