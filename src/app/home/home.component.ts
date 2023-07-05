import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  username: string="";
  password: string = "";
  
 

  onButtonClick(){
  if (this.username === 'hanlinmaung' && this.password === '123456') {
      alert('Match!'); 
    }
  else{
      alert('Do not Match!');
    }
  }

  constructor(
    private heroService: HeroService,
    
  ) {}

  myNumberArray = this.heroService.myArray
  


  ngOnInit(): void {
    
  }

}
