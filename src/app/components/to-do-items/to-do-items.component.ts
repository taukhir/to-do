import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../task';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})
export class ToDoItemsComponent implements OnInit {

  @Input() todo!: Task;
  @Output() todoDelete: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(todo: Task) {
    this.todoDelete.emit(todo);
    console.log("onDelete event");
  } 

}


