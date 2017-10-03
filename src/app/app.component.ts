import {Component} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  constructor() {

  }

}

/**
 {
   "albumId": 1,
   "id": 1,
   "title": "accusamus beatae ad facilis cum similique qui sunt",
   "url": "http://placehold.it/600/92c952",
   "thumbnailUrl": "http://placehold.it/150/92c952"
 }
 */
class Photo {

  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnail: string;

  constructor(private data: Array<any>) {
    this.albumId = data['albumId'];
    this.id = data['id'];
    this.title = data['title'];
    this.url = data['url'];
    this.thumbnail = data['thumbnailUrl'];
  }
}
