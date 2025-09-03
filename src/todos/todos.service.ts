import { Injectable, NotFoundException } from '@nestjs/common';
import { Todos } from './todos.model';

@Injectable()
export class TodosService {
  private todos: Todos[] = [
    {id: 1, title: ' belajar', status : 'pending'},
    {id: 2, title: ' Cara bikin mie ayam', status : 'done'},
    {id: 3, title: ' Berenang', status : 'done'}
  ];
    remove: any;

  findAll(): Todos[] {
    return this.todos;
  }

  findOne(id: number): Todos {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    return todo;
  }

  create(title: string): Todos {
    const newTodo: Todos = {
      id: this.todos.length + 1,
      title,
      status: 'pending',
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, status: 'pending' | 'done'): Todos {
    const todo = this.findOne(id);
    todo.status = status;
    return todo;
  }

  delete(id: number): void {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    this.todos.splice(index, 1);
  }
}
