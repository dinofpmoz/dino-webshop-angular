import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit, AfterViewInit {
  obj: any = { };
  errors: any[] = [];
  @ViewChild('testForm', { static: false }) testForm: any;

  users: any[] = [
    { name: 'Željko', last_name: 'Krnjić', email: 'zeljkokrnjic94@gmail.com', password: 'asd123'},
    { name: 'Ivo', last_name: 'Ivić', email: 'ivo94@gmail.com', password: 'asd123'},
    { name: 'Ante', last_name: 'Antić', email: 'ante94@gmail.com', password: 'asd123'},
  ];

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
  }

  getJSON(){
    return JSON.stringify(this.obj);
  }

}
