import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetScramblesService {

  constructor(private http: HttpClient) { }

  getScrambles() {
    const url = 'https://www.worldcubeassociation.org/oauth/token -X POST -F grant_type=password -F username=software_team -F password=wca{"access_token":"1d6c95446cab947224286b7bec4382d898c664c7a3cafb16d3d110a3044cf4dc","token_type":"bearer","expires_in":7200,"created_at":1430788134}';

  }
}
