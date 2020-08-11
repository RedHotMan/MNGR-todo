import { Resolver, Query } from '@nestjs/graphql';

@Resolver('Todo')
export class TodoResolver {
  @Query()
  hello(): string {
    return 'Hello world';
  }

  @Query()
  todos(): [] {
    return [];
  }
  //Should return an array of todos
}
