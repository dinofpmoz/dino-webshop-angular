import { DataStoreService } from './../../services/data-store.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public store: DataStoreService
  ) { }

  ngOnInit() {
  }

  onClick(item) {
    this.store.sidebarItemKategorijaOnClick(item);
  }
}
