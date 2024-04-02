import {Component, OnInit} from '@angular/core';
import {MyHttpClientService} from './services/my-http-client.service';
import {ActivatedRoute} from '@angular/router';
import {iif} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  componentToShow: string= 'public';

  constructor(private http: MyHttpClientService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params["code"] !== undefined) {
        this.http.getToken(params["code"]).subscribe(result => {
          if (result == true) {
            this.componentToShow = 'private';
          } else {
            this.componentToShow = 'public';
          }
        })
      }
    })
  }
}
