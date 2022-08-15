import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.css']
})
export class WhoIAmComponent implements OnInit {

  tooltipText = "";
  constructor() { }

  ngOnInit(): void {

    let articles = document.querySelectorAll("article");

    articles.forEach(article => {
      article.addEventListener("mouseenter", () => {
        if (this.checkMediaQuery("min-width: 1100px")) {
          article.style.width = "100%"
          article.style.backgroundColor = "rgba(97, 95, 189, 0.15)"
        }
      })
    })
  }

  checkMediaQuery(query: string) {
    return window.matchMedia('(' + query + ')').matches
  }

  changeTooltip(newText: string) {
    let tooltip = document.querySelector<HTMLElement>(".tooltip-words");
    if (tooltip) {
      tooltip.style.padding = (newText !== "") ? "4px 0" : "0"
    }
    this.tooltipText = newText
  }
}
