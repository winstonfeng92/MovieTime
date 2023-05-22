import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 constructor(private userService: UserService) {}
 username: string | undefined;

 ngOnInit() {
  this.userService.user$.subscribe((username) => {
    this.username = username;
  });
  }

  logout() {
    this.userService.logout();
  }


}
