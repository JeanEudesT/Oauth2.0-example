import { Component, OnInit } from '@angular/core';
import {MyHttpClientService} from '../../services/my-http-client.service';

@Component({
  selector: 'app-private-content',
  templateUrl: './private-content.component.html'
})
export class PrivateContentComponent implements OnInit {
  content: any = "";

  constructor(private http:MyHttpClientService) { }

  ngOnInit(): void {
    this.http.getPrivate().subscribe((data: any) => {
      this.content = data.message;
    })
  }

}
