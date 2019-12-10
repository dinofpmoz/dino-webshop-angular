import { SwalService } from './../../services/swal.service';
import { UsersRestService } from './../../services/rest/users-rest.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-korisnici',
  templateUrl: './admin-korisnici.component.html',
  styleUrls: ['./admin-korisnici.component.scss']
})
export class AdminKorisniciComponent implements OnInit {
  @ViewChild('editUserBtn', { static: false }) editUserBtn;
  doneLoading = false;
  searchInput = '';
  users: any[] = [];
  selectedUser: any = {};

  constructor(
    private usersRestService: UsersRestService,
    private swal: SwalService
  ) { }

  ngOnInit() {
    this.usersRestService.getAll()
      .subscribe(data => {
        this.users = data;
        this.doneLoading = true;
      }, err => { this.doneLoading = true; });
  }

  onUserClick(u) {
    this.selectedUser = JSON.parse(JSON.stringify(u));
    this.editUserBtn.nativeElement.click();
  }

  onUserAdded(u) {
    this.users.unshift(u);
    this.swal.ok("Korisnik uspješno kreiran!");
  }

  onUserUpdated(u) {
    var index = this.users.indexOf(this.users.find(x => x.id == u.id));
    if(index > -1) {
      this.users[index] = u;
    }
    this.swal.ok("Korisnik uspješno izmijenjen!");
  }

  onDelete(u, e) {
    e.stopPropagation();
    this.swal.confirmDelete(
      () => {
        this.usersRestService.delete(u)
          .subscribe(data => {
            this.users = this.users.filter(x => x.id != u.id);
            this.swal.ok("Korisnik obrisan!");
          },
          err => {
            this.swal.err("Greška prilikom brisanja!");
          });
      },
      () => { }
    );
  }
}
