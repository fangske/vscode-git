import { Component, OnInit } from '@angular/core';
// import { Todo } from './todo';
// import { TodoDataService } from './todo-data.service';
import { Dealer } from './dealer.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ DataService ]
})

export class AppComponent implements OnInit{

  dealers$: Dealer[];
  // newTodo: Todo = new Todo();

  constructor(private dataService: DataService) {
  }
  
  ngOnInit() {
    return this.dataService.getDealers()
    .subscribe(data => this.dealers$ = data,
      error => console.log(error))
  }

  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

  // toggleTodoComplete(todo) {
  //   this.todoDataService.toggleTodoComplete(todo);
  // }

  // removeTodo(todo) {
  //   this.todoDataService.deleteTodoById(todo.id);
  // }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }

}