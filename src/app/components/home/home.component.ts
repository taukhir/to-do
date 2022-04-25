import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;

  constructor() { }

  ngOnInit(): void {

    this.data = history.state;
    console.log(JSON.stringify(this.data));
    if (this.data.todo !== undefined) {
      // this.updateTask(this.data.todo);
    }

  }

}
