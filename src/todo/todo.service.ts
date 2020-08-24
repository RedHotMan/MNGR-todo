import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo as TagSchema } from './todo.schema';
import { Todo as TodoInterface } from '../graphql';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TagSchema.name) private todoModel: Model<TagSchema>,
    private readonly tagService: TagService,
  ) {}

  async findAll(): Promise<TodoInterface[]> {
    const todoList: any = await this.todoModel.find();
    console.log(todoList);
    const returnedTodoList = todoList.map(async todo => {
      const tag = await this.tagService.findTag(todo.tagId);
      return {
        id: todo.id,
        name: todo.name,
        finished: todo.finished,
        tag,
      };
    });

    return returnedTodoList;
  }

  async createTodo(
    name: string,
    tagId: string,
    finished: boolean,
  ): Promise<TodoInterface> {
    const tag = await this.tagService.findTag(tagId);
    const todo = await this.todoModel.create({ name, finished, tagId });

    console.log(todo);

    return {
      id: todo.id,
      name: todo.name,
      finished: todo.finished,
      tag,
    };
  }

  async toggleFinishedTodo(id: string): Promise<TodoInterface> {
    await this.todoModel.findById(id, async (_, doc) => {
      if (doc) {
        doc.finished = !doc.finished;
        await doc.save(err => {
          if (err) {
            throw new Error(err);
          }
        });
      } else {
        throw new Error('No Todo with this ID found');
      }
    });

    const todo = await this.todoModel.findById(id);
    const tag = await this.tagService.findTag(todo.tagId);

    return {
      id: todo.id,
      name: todo.name,
      finished: todo.finished,
      tag,
    };
  }

  async deleteTodo(id: string): Promise<TodoInterface[]> {
    await this.todoModel.deleteOne({ _id: id });
    return this.findAll();
  }
}
