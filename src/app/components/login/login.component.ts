import { DataStoreService } from 'src/app/services/data-store.service';

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private dataStoreService: DataStoreService
  ) { }

  ngOnInit() {
  }

  btnLoginClick() {
    this.auth.requestLogin(this.email, this.password);
  }

}
