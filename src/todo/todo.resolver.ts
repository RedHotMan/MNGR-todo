import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodoService } from './todo.service';
import { Todo } from './todo.schema';

@Resolver('Todo')
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query()
  hello(): string {
    return 'Hello world';
  }

  @Query()
  async todos(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Mutation()
  async createTodo(@Args('name') name: string): Promise<Todo> {
    return await this.todoService.createTodo(name);
  }

  @Mutation()
  async toggleFinishedTodo(@Args('id') id: string): Promise<Todo> {
    return await this.todoService.toggleFinishedTodo(id);
  }
}
