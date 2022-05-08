import { Component, OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../task';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(public todosService: TodoService) {
  }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(
      (data: Task[]) => {
        this.tasks = data;
      }
    )
  };

  deleteTodo(todo: Task): void {
    this.todosService.deleteTodo(todo.id!).subscribe(response => {console.log(response);});
    this.tasks.splice(this.tasks.indexOf(todo), 1);
  }

  addTasks(todo: Task): void {
    this.todosService.addTodo(todo).subscribe(response => {console.log(response);});
    this.tasks.push(todo);

  }

  toggleTask(todo: Task): void {
    todo.completed = !todo.completed;
    this.todosService.updateTodo(todo,todo.id!).subscribe(response => {console.log(response);});
    const index = this.tasks.indexOf(todo);
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  updateTask(todo: Task): void {
    this.todosService.updateTodo(todo,todo.id!).subscribe(response => {console.log(response);});
    this.tasks[this.tasks.indexOf(todo)] = todo;
  }

}
