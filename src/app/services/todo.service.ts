import {Injectable} from '@angular/core';
import {Todo} from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private data: Todo[] = Array.of(...[
    new Todo(1, 'Task 1 content is here', false),
    new Todo(2, 'Task 2 content is here', false),
    new Todo(3, 'Task 3 content is here', false),
  ])

  constructor() {
  }

  getAll() {
    return this.data;
  }

  get(id: number) {
    this.data.forEach((item, index) => {
      if (item.id == id) {
        return this.data[index]
      } else {
        return null;
      }
    })
  }

  update(todo: Todo) {
    this.data.forEach((item, index) => {
      if (item.id == todo.id) {
        this.data[index] = todo;
      }
    })
  }

  remove(todo: Todo) {
    this.data.forEach((item, index) => {
      if (item.id == todo.id) {
        this.data.splice(index, 1)
      }
    })
  }
}
