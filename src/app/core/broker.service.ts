import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(
    private http: HttpClient
  ) { }

  eventCarrers(){
		return this.http.get('assets/content/projects.json')
	}
}
