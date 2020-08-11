import { Resolver, Query } from '@nestjs/graphql';
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
}
