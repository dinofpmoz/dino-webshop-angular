import { UsersRestService } from './../../services/rest/users-rest.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-korisnik-modal',
  templateUrl: './add-korisnik-modal.component.html',
  styleUrls: ['./add-korisnik-modal.component.scss']
})
export class AddKorisnikModalComponent implements OnInit {
  @Output() userAdded = new EventEmitter<any>();
  @Output() userUpdated = new EventEmitter<any>();
  @Input() id = '';
  @Input() title = '';
  @Input() user: any = {};
  @Input() mode = 'add';

  constructor(private usersRestService: UsersRestService) { }

  ngOnInit() {
    this.title = this.mode == 'add' ? 'Dodaj korisnika' : 'Izmjeni korisnika';
  }

  onCancel() {
    this.user = {};
    this.mode = '';
  }

  onSave() {
    if(this.mode == 'add') {
      this.usersRestService.insert(this.user)
        .subscribe(data => {
          this.userAdded.emit(data);
          this.user = {};
        },
        err => { this.user = {}; });
    } else if(this.mode == 'edit') {
      this.usersRestService.update(this.user, this.user.id)
        .subscribe(data => {
          this.userUpdated.emit(data);
          this.user = {};
        },
        err => {
          this.user = {};
        });
    }
    this.mode = '';
  }

  getJSON() {
    return JSON.stringify(this.user);
  }

}
