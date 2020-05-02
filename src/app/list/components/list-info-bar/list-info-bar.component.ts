import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'list-info-bar',
  templateUrl: './list-info-bar.component.html',
  styleUrls: ['./list-info-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListInfoBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
