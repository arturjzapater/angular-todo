import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { v1 as uuid } from 'uuid'

import type { Todo } from './todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = []

  add(name: string): Observable<Todo[]> {
    this.todos.push({
      id: uuid(),
      name,
      done: false
    })

    return of(this.todos)
  }

  complete(id: string, status: boolean): Observable<Todo[]> {
    const todo = this.todos.find(x => x.id === id)
    if (!todo) return

    todo.done = status
    return of(this.todos)
  }

  list(): Observable<Todo[]> {
    return of(this.todos)
  }

  remove(id: string): Observable<Todo[]> {
    this.todos = this.todos.filter(x => x.id !== id)
    return of(this.todos)
  }
}
