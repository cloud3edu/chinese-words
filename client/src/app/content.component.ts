import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ContentService } from './content.service';
import { MyBookService } from './mybook.service';
import { ContentItem } from './content-item';

@Component({
  selector: 'content-detail',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {

  contents: ContentItem [];
  currentItem: ContentItem;
  index : number;

  constructor(
    private contentService: ContentService,
    private myBookService: MyBookService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.contentService.getContent(+params.get('number')))
      .subscribe(contents => {
        console.log(contents);
        this.contents = contents;
        this.index = 0;
        this.currentItem = this.contents[this.index];
      });
  }

  toPrevious(): void {
    if(this.index > 0) {
      this.index -= 1;
      this.currentItem = this.contents[this.index];
    }
  }

  toNext(): void {
    if(this.index < 49) {
      this.index += 1;
      this.currentItem = this.contents[this.index];
    }
  }

  atBeginning(): boolean {
    return this.index === 0;
  }

  atEnd(): boolean {
    return this.index === 49;
  }

  addToMyBook(): void {
    this.myBookService.addToMyBook(this.currentItem._id)
    .then(() => {
      console.log("Current Item " + this.currentItem.word + " added to my book");
    })
  }
}
