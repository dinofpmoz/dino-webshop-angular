import { ArtikliRestService } from './../../services/rest/artikli-rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregled-artikla',
  templateUrl: './pregled-artikla.component.html',
  styleUrls: ['./pregled-artikla.component.scss']
})
export class PregledArtiklaComponent implements OnInit {
  doneLoading = false;
  artikl: any = {};

  constructor(
    private route: ActivatedRoute,
    private artikliService: ArtikliRestService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        const id = +params['id'];
        if(id) {
          this.artikliService.get(id).subscribe(
            data => {
              this.artikl = data;
              this.doneLoading = true;
            }
          );
        }
      }
    );
  }

}
