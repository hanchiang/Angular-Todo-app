import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
	// Placeholder ofr last id so we can simulate
	// automatic incrementing of id's
	lastId: number = 0;

	// Placeholder for todo's
	todos: Todo[] = [];

	constructor() { }

	// simulate POST /todos
	addTodo(todo: Todo): TodoDataService {
		if (!todo.id) {
			todo.id = ++this.lastId;
		}

		this.todos.push(todo);
		return this;
	}

	// simute DELETE /todos/:id
	deleteTodoById(id: number): TodoDataService {
		this.todos = this.todos
			.filter(todo => todo.id !== id);
		return this;
	}

	// simulate PUT /todos/:id
	updateTodoById(id: number, values: Object = {}): Todo {
		let todo = this.getTodoById(id);
		if (!todo) {
			return null;
		}
		Object.assign(todo, values);
		return todo;
	}

	// simuate GET /todos
	getAllTodos(): Todo[] {
		return this.todos;
	}

	// simulate GET /todos/:id
	getTodoById(id: number): Todo {
		return this.todos
		.filter(todo => todo.id === id)
		.pop();
	}

	// toggle todo complete
	toggleTodoComplete(todo: Todo) {
		let updatedTodo = this.updateTodoById(todo.id, {
			complete: !todo.complete
		});
		return updatedTodo;
	}

}
