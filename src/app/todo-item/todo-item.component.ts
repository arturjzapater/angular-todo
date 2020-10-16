import { Component, EventEmitter, Input, Output } from '@angular/core';

import type { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo
  @Output() toggle: EventEmitter<[ string, boolean ]> = new EventEmitter

  toggleTodo() {
    this.toggle.emit([ this.todo.id, !this.todo.done ])
  }
}
