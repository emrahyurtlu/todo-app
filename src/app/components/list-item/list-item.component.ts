import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Todo} from "../../models/todo";
import {Router} from "@angular/router";

@Component({
  selector: 'todo-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() todo: Todo = new Todo(0, "Title", false);
  @Output() todoEvent = new EventEmitter<Todo>();
  todoIsChecked: boolean = this.todo.isDone;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  isDone() {
    this.todo.isDone = this.todoIsChecked;
    this.todoEvent.emit(this.todo);
  }

  gotoDetails(todo: Todo) {
    this.router.navigate(['/todo-details'], {queryParams: {todo: todo}})
  }
}
