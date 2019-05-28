import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {
  title = 'lms';
  manageItems: string[] = [
    'course',
    'lesson'
  ];
  manageItemsAfterDivider: string[] = [
    'personnel'
  ];
  userItems: string[] = [
    'profile'
  ];
  userItemsAfterDivider: string[] = [
    'logout'
  ];
  constructor() { }

  ngOnInit() {
  }

}
