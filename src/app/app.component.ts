import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('table') table: Table = {} as Table;
  data = [];

  constructor() {
    for (var iii = 0; iii < 300000; iii++) {
      this.data.push({
        column1: iii,
        column2: iii,
        column3: iii,
        column4: iii,
        column5: iii,
      });
    }
  }

  scrollTo40000() {
    this.table.scrollToVirtualIndex(40000);
  }

  scrollToTop() {
    this.table.scrollToVirtualIndex(0);
  }
}
