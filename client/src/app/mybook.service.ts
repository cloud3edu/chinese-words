import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ContentItem } from './content-item';
import { MyWord } from './myword';

@Injectable()
export class MyBookService {

  private myWordsUrl = "api/mywords";

  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) {}

  getMyWords(): Promise<ContentItem[]> {
    return this.http.get(this.myWordsUrl)
      .toPromise()
      .then(response => {
        const mywords = response.json() as MyWord[];
        return mywords.map(myword => myword.word);
      });
  }

  addToMyBook(id: string): Promise<any> {
    const body = {
      word: id
    }
    return this.http.post(this.myWordsUrl, body)
      .toPromise()
      .then(response => {
        return response.json();
      })
  }

  removeMyWord(id: string): Promise<any> {
    const url = this.myWordsUrl + "/" + id;
    return this.http.delete(url)
      .toPromise()
      .then(response => response.json());
  }
}
