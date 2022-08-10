import { Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'jorge_de_paz-portfolio';

  currentSlide = 0;

  constructor() {}

  onWheel(event: WheelEvent): void {

    let main = document.querySelector("main");
    let div = document.querySelector("div");

    console.log(div?.children);
    
    
    if (main && main.scrollLeft % main.offsetWidth === 0) {
   
      if(div && this.currentSlide >= div.children.length-1) {
        this.currentSlide = 0;
        main.scrollLeft = main.offsetWidth * this.currentSlide
        return;
      }

      if (event.deltaY > 0) {
        
        this.currentSlide++
        console.log(this.currentSlide);
        
        main.scrollLeft = main.offsetWidth * this.currentSlide
        console.log(main.offsetWidth * this.currentSlide);
      } else if(main.scrollLeft > 0) {
        
        this.currentSlide--
        main.scrollLeft = main.offsetWidth * this.currentSlide
      }
      
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    let main = document.querySelector("main");
      
    if (main) {
      main.style.scrollBehavior = "auto"
      main.scrollLeft = 0;
      main.style.scrollBehavior = "smooth"
      main.scrollLeft+=main.offsetWidth * this.currentSlide
    }
  }

}
