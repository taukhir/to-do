import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../task';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-view-to-do',
  templateUrl: './view-to-do.component.html',
  styleUrls: ['./view-to-do.component.scss']
})
export class ViewToDoComponent implements OnInit {

  public data: any;
  public taskName!: string;
  public comment!: string;
  constructor(private router: Router, public todosService: TodoService) { }

  setValue() {
    console.log('task Name: ', this.taskName);
  }

  ngOnInit(): void {
    this.data = history.state.todo;
    this.taskName = this.data.text;
    this.comment = this.data.comment;
  }

  onSubmit(): void {
    this.data.text = this.taskName;
    this.data.comment = this.comment;
    console.log(`${this.taskName} & ${this.comment}`)
    console.log(JSON.stringify(this.data));
    this.todosService.updateTodo(this.data, this.data.id).subscribe(response => {console.log(response);});
    this.router.navigate(['/', 'home'])
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
  }

}
