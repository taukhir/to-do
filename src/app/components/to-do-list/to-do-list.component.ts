import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import {Task} from '../../task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

tasks : Task[] = TASKS;

  constructor() { }

  ngOnInit(): void {
  }

}
