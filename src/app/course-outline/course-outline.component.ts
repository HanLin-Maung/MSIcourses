import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-course-outline',
  templateUrl: './course-outline.component.html',
  styleUrls: ['./course-outline.component.css']
})
export class CourseOutlineComponent implements OnInit {

  constructor(
    private heroService :HeroService,
    private activatedRoute: ActivatedRoute
  ){}


  darkModeEnabled = false;

  myfun(event: any): void {
    this.darkModeEnabled = event.checked;
  }

  courseId: any;
  course: any;
  courses = this.heroService.courses

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(typeof(this.courseId));
    
    this.course = this.courses.find(c => c.id == this.courseId);

    // == check the value are equal > 1 = '1' > true
    // === check the value and type are equal > 1 = '1' - false

    // for(var i = 0; i < this.courses.length; i++){
    //   if(this.courses[i].id == this.courseId){
    //     this.course = this.courses[i];
    //   console.log(">>>>>");
       
        
    //     console.log(this.course);
        
    //   }
    // }

    console.log(this.course);
  }

}

