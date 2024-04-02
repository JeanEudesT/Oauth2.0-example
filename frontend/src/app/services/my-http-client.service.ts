import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Token} from '../entities/token';

@Injectable({
  providedIn: 'root'
})
export class MyHttpClientService {

  private baseBackendUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }


  get(url: string = "/") {
    return this.http.get(this.baseBackendUrl.concat(url), { withCredentials: true });
  }

  getAuthenticationUrl() {
    return this.get("/auth/url");
  }

  getPrivate(): any {
    return this.get("/private");
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>(this.baseBackendUrl.concat("/auth/callback?code="+code),
      {observe: "response", withCredentials: true})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status == 200 && response.body !== null) {
          return true;
        }
        return false;
    }));
  }
}
