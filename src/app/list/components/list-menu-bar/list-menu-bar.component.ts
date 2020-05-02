import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-menu-bar',
  templateUrl: './list-menu-bar.component.html',
  styleUrls: ['./list-menu-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListMenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
