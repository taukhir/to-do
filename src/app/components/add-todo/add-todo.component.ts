import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../task';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  taskName!: string;
  comment!: String;

  @ViewChild('myForm', { static: false }) myForm!: NgForm;
  @Output() addTodo: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log();
    const todo = {
      id: Math.floor(Math.random() * 100) + 1,
      text: this.taskName,
      day: new Date().toISOString().toString(),
      completed: false,
      createDate: new Date().toISOString().toString(),
      updatedDate: new Date().toISOString().toString(),
      comment: this.comment,
      createdBy: 'ahmed'
    };
    this.myForm.resetForm();
    this.addTodo.emit(todo);
  }

}
