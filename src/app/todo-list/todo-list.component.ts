import { Component, OnInit } from '@angular/core';

import { TodoService } from '../todo.service';
import type { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  add(name: string): void {
    this.todoService.add(name)
      .subscribe(list => this.todos = list);
  }

  toggle(id: string, done: boolean): void {
    this.todoService.complete(id, done)
      .subscribe(list => this.todos = list);
  }

  getTodos(): void {
    this.todoService.list()
      .subscribe(list => this.todos = list);
  }
}
