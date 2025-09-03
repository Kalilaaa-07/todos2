import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { TodosService } from './todos.service';
import type { Todos } from './todos.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todos[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Todos {
    return this.todosService.findOne(Number(id));
  }

  @Post()
  create(@Body('title') title: string): Todos {
    return this.todosService.create(title);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, 
  @Body ('title') title: string,
  @Body ('status') status: 'pending' | 'done',
): Todos {
    return this.todosService.update(id, status, );
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: Number): void {
    return this.todosService.remove(id);
  }
}
