import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './tododata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
	// Used in the two-way binding
	newTodo: Todo = new Todo();

	constructor(private todoDataService: TodoDataService) {}

	addTodo() {
		this.todoDataService.addTodo(this.newTodo);
		this.newTodo = new Todo();
	}

	toggleTodoComplete(todo) {
		this.todoDataService.toggleTodoComplete(todo);
	}

	removeTodo(todo) {
		this.todoDataService.deleteTodoById(todo.id);
	}

	get todos() {
		return this.todoDataService.getAllTodos();
	}
}
