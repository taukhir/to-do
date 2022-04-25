import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.scss']
})
export class ViewToDoComponent implements OnInit {

  public data: any;
  public taskName!: String;
  public comment!: String;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.data = history.state.todo;
    this.taskName = this.data.text;
    this.comment = this.data.comment;
  }

  onSubmit(): void {
    this.data.taskName = this.taskName;
    this.data.comment = this.comment;
    console.log(JSON.stringify(this.data));
    this.router.navigate(['/', 'home'], this.data)
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
  }

}
