import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(private userService: UserService) {}
  username: string | undefined;

  ngOnInit() {
    this.userService.user$.subscribe((username) => {
      this.username = username;
    });
  }
}
