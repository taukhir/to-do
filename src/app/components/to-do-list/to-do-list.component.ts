import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public tasks: Task[] = TASKS;
  public data :any;

  constructor() {
  }

  ngOnInit(): void {
    
  }

  deleteTodo(todo: Task): void {
    console.log("deleteTodo triggered");
    this.tasks.splice(this.tasks.indexOf(todo), 1);
  }

  addTasks(todo: Task): void {
    this.tasks.push(todo);

  }

  toggleTask(todo: Task): void {
    const index = this.tasks.indexOf(todo);
    this.tasks[index].completed = !this.tasks[index].completed; 
  }

  updateTask(todo: Task) : void {
    this.tasks[this.tasks.indexOf(todo)] = todo;
  }

}
