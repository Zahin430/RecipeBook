import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';

import { Component } from '@angular/core';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  // Using the clickListener on the html template we are fetching the data
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
   this.authService.logout();
  }

  // Accessed the authService's method to use in the template
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
