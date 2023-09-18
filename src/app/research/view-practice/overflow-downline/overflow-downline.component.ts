import { Component } from '@angular/core';

@Component({
  selector: 'app-overflow-downline',
  templateUrl: './overflow-downline.component.html',
  styleUrls: ['./overflow-downline.component.scss'],
})
export class OverflowDownlineComponent {
  rate: number = 3;
  items: any[] = [];
  files: any[] = [];
  constructor() {
    this.items = [
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kansdfse Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kansdsde Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
    ];
    this.files = [
      { name: 'asdfa.pdf' },
      { name: 'adsfasdfasdfsadfas.txt' },
      { name: 'Kane Tran.zip' },
      { name: 'Kane Tran' },
      { name: 'Kansdfse Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kansdsde Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
      { name: 'Kane Tran' },
    ];
  }
  delete() {
    console.log(3);
  }
  add() {
    this.files.push({ name: '1234.txt' });
  }
}
