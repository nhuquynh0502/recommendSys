import { Component, OnInit } from '@angular/core';
import { User } from '../model';
import { RecommendService } from '../recommend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public users: User[] = [];
  constructor(private recommendService: RecommendService) { }

  ngOnInit(): void {
    this.recommendService.getUsers().subscribe(users => {
      this.users = users;
    })
  }
}
