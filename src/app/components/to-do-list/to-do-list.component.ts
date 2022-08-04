import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../task';
import { TodoService } from '../../services/todo.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  public tasks: Task[] = [];
  public destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public todosService: TodoService) {}

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  deleteTodo(todo: Task): void {
    this.todosService
      .deleteTodo(todo.id!)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: HttpResponse<any>) => {
        console.log(response);
      });
    this.tasks.splice(this.tasks.indexOf(todo), 1);
  }

  addTasks(todo: Task): void {
    this.todosService
      .addTodo(todo)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        if (response.status === 201) console.log(response.status);
        console.log(JSON.stringify(response))
      });
    this.tasks.push(todo);
  }

  toggleTask(todo: Task): void {
    let status = !todo.completed;
    const index = this.tasks.indexOf(todo);
    this.tasks[index].completed = status;
    todo.completed = status;
    this.todosService
      .updateTodo(todo, todo.id!)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(response);
      });
  }

  updateTask(todo: Task): void {
    this.todosService
      .updateTodo(todo, todo.id!)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(response);
      });
    this.tasks[this.tasks.indexOf(todo)] = todo;
  }
}
