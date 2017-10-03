import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  url = '';

  constructor(private http: Http) {

    http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(data => {
        this.url = 'https://upload.wikimedia.org/wikipedia/commons/2/24' +
          '/Willaerts_Adam_The_Embarkation_of_the_Elector_Palantine_Oil_Canvas-huge.jpg';
      });
  }

  getBackgroundImage() {
    return this.url;
  }


  ngOnInit(): void {
  }

}
