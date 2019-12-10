import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-add-kategoriju-modal',
  templateUrl: './add-kategoriju-modal.component.html',
  styleUrls: ['./add-kategoriju-modal.component.scss']
})
export class AddKategorijuModalComponent implements OnInit {
  @Output() kategorijaAdded = new EventEmitter<any>();
  @Output() kategorijaUpdated = new EventEmitter<any>();
  @Input() id = '';
  @Input() title = '';
  @Input() kategorija: any = {};
  @Input() mode = 'add';


  constructor() { }

  ngOnInit() {
    this.title = this.mode == 'add' ? 'Dodavanje kategorije' : 'Izmjena kategorije';
  }

  onKategorijaAdded(k) {
    this.kategorijaAdded.emit(k);
  }

  onKategorijaUpdated(k) {
    this.kategorijaUpdated.emit(k);
  }
}
