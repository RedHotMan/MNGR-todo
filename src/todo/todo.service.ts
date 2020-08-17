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

  async createTodo(name: string, finished: boolean): Promise<Todo> {
    return await this.todoModel.create({ name, finished });
  }

  async toggleFinishedTodo(id: string): Promise<Todo> {
    return await this.todoModel.findById(id, async (_, doc) => {
      doc.finished = !doc.finished;
      await doc.save();
    });
  }

  async deleteTodo(id: string): Promise<Todo[]> {
    await this.todoModel.deleteOne({ _id: id });
    return this.findAll();
  }
}
