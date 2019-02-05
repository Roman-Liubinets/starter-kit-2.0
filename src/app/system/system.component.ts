import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from './main-page/store/index';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss'],
})
export class SystemComponent implements OnInit {
  constructor(private store: Store<fromStore.MainPageState>) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadItem());
  }
}
