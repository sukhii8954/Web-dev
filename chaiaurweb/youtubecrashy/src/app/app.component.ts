import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "Project CC";

  todoValue: string = ""; // all todos are in form of string
  list: Todo[] = [];

  ngonInit() {
    // lifecycle event in angular on intialization
    this.list = [];
    this.todoValue = "";
  }

  addItem() {
    if (this.todoValue !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };

      this.list.push(newTodo);
    }
      this.todoValue = "";
  }

  deleteItem(id:number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
