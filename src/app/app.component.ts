import {Component, OnInit} from '@angular/core';
import {liff} from '@line/liff';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'Proof of Concept - LIFF';
	idToken: string = '';
	displayName: string = '';
	pictureUrl: string = '';
	statusMessage: string = '';
	userId: string = '';

	constructor() {
	}

	ngOnInit(): void {
		liff.init({
			liffId: '1655708815-0n1nBbJ8'
		}).then(() => {
			if (liff.isLoggedIn()) {
				liff.getProfile().then((profile) => {
					console.log(profile);
					this.displayName = profile.displayName;
					this.pictureUrl = profile.pictureUrl;
					this.statusMessage = profile.statusMessage;
					this.userId = profile.userId;
				});
			} else {
				liff.login();
			}
		}).catch((error) => {
			console.log(error);
		});
	}

	logout(): void {
		liff.logout();
		window.location.reload();
	}
}
