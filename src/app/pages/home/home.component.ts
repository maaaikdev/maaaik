import { Component, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/core/broker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public projects: any;
	public isLoading: boolean
	

	constructor(
		private broker: BrokerService
	) { }

	ngOnInit() {
		this.isLoading = true;
		this.getEvents()
	}	

  	getEvents() {
		setTimeout(() => {
			this.broker.eventCarrers().subscribe( response => {
				console.log("RESPONse", response);
				if(response){
					this.isLoading = false;
					this.projects = response;
				}			
			})
		}, 2000);
	}

}
