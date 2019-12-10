import { KategorijeRestService } from './../../services/rest/kategorije-rest.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SwalService } from './../../services/swal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-kategoriju-form',
  templateUrl: './add-kategoriju-form.component.html',
  styleUrls: ['./add-kategoriju-form.component.scss']
})
export class AddKategorijuFormComponent implements OnInit {
  @Input() kategorija: any = {};
  @Input() mode;
  @Output() kategorijaAdded = new EventEmitter<any>();
  @Output() kategorijaUpdated = new EventEmitter<any>();

  constructor(
    private kategorijeRestService: KategorijeRestService,
    private router: Router,
    private swal: SwalService
  ) { }

  ngOnInit() {
  }

  onCancel() {

  }

  onSubmit() {
    if(this.mode == 'add'){
      this.kategorijeRestService.insert(this.kategorija)
      .subscribe(data => {
        this.kategorijaAdded.emit(data);
      },
      err => {
        //this.swal.err('Greška!');
      });
    } else if(this.mode == 'edit') {
      this.kategorijeRestService.update(this.kategorija, this.kategorija.id)
      .subscribe(data => {
        this.kategorijaUpdated.emit(data);
        this.kategorija = {};
      },
      err => {
        //this.swal.err('Greška!');
      });
    }
  }
}
