import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { WhoIAmComponent } from './components/who-i-am/who-i-am.component';

import * as AOS from "aos";
import 'aos/dist/aos.css';

@Component({
  providers: [WhoIAmComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  tooltipText = ""

  sectionTitle: string[] = [" ", "About me", "Projects", "Education & Experience"]
  currentSlide = 0;

  constructor(private comp: WhoIAmComponent) { }

  ngOnInit(): void {
    AOS.init({});

    let slides = document.querySelector("div.slides");
    if (slides && this.currentSlide === 0) {
      let buttonPrev = document.querySelector<HTMLElement>("button.btn-prev");
      let button = document.querySelector<HTMLElement>("button.btn-next");
      if (buttonPrev && button) {
        buttonPrev.style.visibility = "hidden";
        button.classList.add("index0")
      }
    } else {
      let button = document.querySelector<HTMLElement>("button.btn-prev");
      if (button)
        button.style.visibility = "visible";
    }
  }


  changeSlide(value: number) {


    AOS.refreshHard();
    let main = document.querySelector("main");
    let slides = document.querySelector("div.slides");
    if (main && main.scrollLeft % main.offsetWidth === 0) {
      if (value > 0 && main.scrollLeft < main.offsetWidth * 3) {
        this.currentSlide++
        main.scrollLeft = main.offsetWidth * this.currentSlide

      } else {
        this.currentSlide--
        main.scrollLeft = main.offsetWidth * this.currentSlide
      }


      if (slides && slides.childNodes.length - 1 === this.currentSlide) {
        let button = document.querySelector<HTMLElement>("button.btn-next");
        if (button)
          button.style.visibility = "hidden";
      } else {
        let button = document.querySelector<HTMLElement>("button.btn-next");
        if (button)
          button.style.visibility = "visible";
      }

      if (slides && this.currentSlide === 0) {
        let buttonPrev = document.querySelector<HTMLElement>("button.btn-prev");
        let button = document.querySelector<HTMLElement>("button.btn-next");
        if (buttonPrev && button) {
          buttonPrev.style.visibility = "hidden";
          button.classList.add("index0")
        }
      } else {
        let buttonPrev = document.querySelector<HTMLElement>("button.btn-prev");
        let button = document.querySelector<HTMLElement>("button.btn-next");
        if (buttonPrev && button) {
          buttonPrev.style.visibility = "visible";
          button.classList.remove("index0")
        }
      }


    }
  }

  goToLink(link: string) {
    window.open(link, "_blank");
  }
  changeText(newText: string) {
    this.tooltipText = newText
  }
}
