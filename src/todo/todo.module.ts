import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { Todo, TodoSchema } from './todo.schema';
import { TagModule } from 'src/tag/tag.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
    TagModule,
  ],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
