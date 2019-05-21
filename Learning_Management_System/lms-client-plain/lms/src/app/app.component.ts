import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
