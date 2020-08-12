import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find();
  }

  async createTodo(name: string): Promise<Todo> {
    return await this.todoModel.create({ name: name, finished: false });
  }

  async toggleFinishedTodo(id: string): Promise<Todo> {
    // Update this function because it doing twice the retrieving of the concerned todo... not good at all
    const todo = await this.todoModel.findById(id);
    return await this.todoModel.findByIdAndUpdate(
      id,
      {
        finished: !todo.finished,
      },
      { new: true },
    );
  }
}
