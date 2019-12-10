import { SwalService } from './../../services/swal.service';
import { UsersRestService } from './../../services/rest/users-rest.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-korisnik-form',
  templateUrl: './add-korisnik-form.component.html',
  styleUrls: ['./add-korisnik-form.component.scss']
})
export class AddKorisnikFormComponent implements OnInit, AfterViewInit {
  @ViewChild('addKorisnikForm', { static: false }) addKorisnikForm: any;
  user: any = { role: 'user'};

  constructor(
    private usersRestService: UsersRestService,
    private router: Router,
    private swal: SwalService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.addKorisnikForm);
  }

  onSignup() {
    this.usersRestService.insert(this.user)
      .subscribe(data => {
          this.swal.ok("Korisnički profil kreiran!");
          this.router.navigate(['/login']);
      },
      err => {
        this.swal.err("Greška prilikom kreiranja korisničkog profila!");
      });
  }

  onCancel() {
    this.router.navigate(['/']);
  }
}
