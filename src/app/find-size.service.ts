import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface SizeResponse {
  size: string;
}

@Injectable({
  providedIn: 'root'
})
export class FindSizeService {
  headers = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getSize(data) {
    let url = 'https://twinster.sizes.showmysize.com/api/sizefinder/';
    data = JSON.stringify(data);
    return this.http.put<SizeResponse>(url, data, this.headers).pipe(
      map(res => res.size || []),
      catchError(error => throwError(error.message || error))
   );
  }
}
