import { NbSidebarService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {
  base64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEVEeef///+4zPaKq/ChvPPn7' +
    'vxymu3Q3flbieqI1HvuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAQUlEQVQ4jWNgGAWjgP6ASdncAEaiAhaGiACmFhCJLsMaIiDAEQEi0WXYEiMC' +
    'OCJAJIY9KuYGTC0gknpuHwXDGwAA5fsIZw0iYWYAAAAASUVORK5CYII='

  items = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      expanded: false,
      link: [],
    },
    {
      title: 'Learning Management',
      icon: 'nb-grid-b-outline',
      expanded: true,
      children: [
        {
          title: 'Courses',
          link: [],
        },
        {
          title: 'Lessons',
          link: [],
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
}
