import { Component, OnInit } from '@angular/core';

import { Chapter } from './chapter';
import { ChapterService } from './chapter.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  chapters: Chapter[] = [];

  constructor(private chapterService: ChapterService) {}

  ngOnInit(): void {
    this.chapterService.getChapters()
      .then(chapters => this.chapters = chapters)
  }
}
