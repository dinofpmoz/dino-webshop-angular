import { DataStoreService } from './services/data-store.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthService,
    public store: DataStoreService
    ) {

  }

  ngOnInit() {
    this.store.syncData(true)
      .subscribe(data => {
        this.store.data = data;
        this.store.init();
      }).add(() => {
        this.store.hideLoading();
      });
    this.auth.checkSession();
  }

  title = 'laravel-webshop-angular-adminlte';
}
