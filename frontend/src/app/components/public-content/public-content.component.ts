import { Component, OnInit } from '@angular/core';
import {MyHttpClientService} from '../../services/my-http-client.service';

@Component({
  selector: 'app-public-content',
  templateUrl: './public-content.component.html'
})
export class PublicContentComponent implements OnInit {
  content: string = "";

  constructor(private http: MyHttpClientService) { }

  ngOnInit(): void {
    this.http.get("/").subscribe((data: any) => {
      this.content = data.message;
    })
  }

}
