import { Component, OnInit } from '@angular/core';

import { ContentItem } from './content-item';
import { MyBookService } from './mybook.service';

@Component({
  selector: 'my-book',
  templateUrl: './mybook.component.html',
  styleUrls: ['./mybook.component.css']
})

export class MyBookComponent implements OnInit {

  words: ContentItem [];
  currentWord: ContentItem;
  index: number;

  constructor(private myBookService: MyBookService) {}

  ngOnInit(): void {
    this.index = 0;
    this.myBookService.getMyWords()
      .then(
        words => {
          this.words = words;
          this.currentWord = this.words[0];
        }
      )
  }

  toPrevious(): void {
    if(this.index > 0) {
      this.index -= 1;
      this.currentWord = this.words[this.index];
    }
  }

  toNext(): void {
    if(this.index < this.words.length-1) {
      this.index += 1;
      this.currentWord = this.words[this.index];
    }
  }

  atBeginning(): boolean {
    return this.index === 0;
  }

  atEnd(): boolean {
    return this.index === this.words.length-1;
  }

  removeWord() {
    this.myBookService.removeMyWord(this.currentWord._id)
    .then( (response) => {

      // remove current word
      this.words.splice(this.index, 1);

      // if index is the last element, then shift it by 1
      if(this.index === this.words.length) {
        this.index--;
      }

      // get new current word
      this.currentWord = this.words[this.index];

    })
  }
}
