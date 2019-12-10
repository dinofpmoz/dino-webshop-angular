import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() icon = '';
  @Input() breadcrumbs: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
