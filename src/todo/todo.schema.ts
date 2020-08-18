import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag } from 'src/tag/tag.schema';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: false })
  finished: boolean;

  @Prop(Tag)
  tag: Tag;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
