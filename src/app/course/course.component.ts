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

  darkModeEnabled: boolean = false;

  myfun(event: any): void {
    this.darkModeEnabled = event.checked;
    console.log(event.checked)
  }

  
  courses = this.heroService.courses

  
  ngOnInit(): void {
   
    
  }
}
