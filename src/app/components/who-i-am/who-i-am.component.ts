import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.css']
})
export class WhoIAmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let articles = document.querySelectorAll("article");

    articles.forEach(article => {
      article.addEventListener("mouseenter", () => {
        article.style.width = "100%"
        article.style.backgroundColor = "rgba(255, 255, 255, 0.1)"
      })
    })
  }

}
