import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

// define interface for the getSize response
interface SizeResponse {
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class FindSizeService {
  baseApiUrl = 'https://twinster.sizes.showmysize.com/api/';

  // define request headers
  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // PUT request, returns {'size': 'value'}
  getSize(data) {
    const url = 'sizefinder/';
    data = JSON.stringify(data);
    return this.http.put<SizeResponse>(this.baseApiUrl + url, data, this.headers).pipe(
      map(res => res.size, error => error),
   );
  }
}
