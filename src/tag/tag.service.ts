import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from './tag.schema';
import { Model } from 'mongoose';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  async findAll(): Promise<Tag[]> {
    return await this.tagModel.find();
  }

  async createTag(name: string): Promise<Tag> {
    return await this.tagModel.create({ name });
  }

  async findTag(id: string): Promise<Tag> {
    return await this.tagModel.findById(id);
  }
}
