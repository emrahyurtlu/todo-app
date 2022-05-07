import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo";

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todos = this.todoService.getAll();
  }

  updateTodo(todo: Todo) {
    this.todoService.update(todo)
  }
}
