import { NbSidebarService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {
  
  contextMenuItems = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];


  items = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      expanded: false,
      link: ['/lms/dashboard'],
    },
    {
      title: 'Learning Management',
      icon: 'nb-grid-b-outline',
      expanded: true,
      children: [
        {
          title: 'Courses',
          link: ['/lms/course'],
        },
        {
          title: 'Lessons',
          link: ['/lms/lesson'],
        },
      ],
    },
    {
      title: 'Settings',
      icon: 'nb-gear',
      expanded: false,
      link: [],
    }
  ];

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit() {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  goToHome(){
    console.log('go to home')
  }
}
