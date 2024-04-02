import { Component, OnInit } from '@angular/core';
import {MyHttpClientService} from '../../services/my-http-client.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
  url: string = "";

  constructor(private http: MyHttpClientService) { }

  ngOnInit(): void {
    this.http.getAuthenticationUrl().subscribe((data: any) => {
      this.url = data.url;
    })
  }

}
