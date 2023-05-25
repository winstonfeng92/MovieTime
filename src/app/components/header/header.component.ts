import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(private userService: UserService, private authService: AuthService) {}
 username: string | undefined;

 ngOnInit() {
  this.userService.user$.subscribe((username) => {
    this.username = username;
  });

  this.authService.wakeUpApi().subscribe(
    
    (response) => {
    console.log('The API is awake!: ',response)
    },
    (error) => {
      console.error('Error waking up API:', error);
      // Handle the error here
    }
  )
  }

  logout() {
    this.userService.logout();
  }


}
