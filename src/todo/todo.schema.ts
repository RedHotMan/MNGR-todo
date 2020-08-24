import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Tag as TagInterface } from 'src/graphql';

@Schema()
export class Todo extends Document {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ default: false })
  finished: boolean;

  @Prop()
  tag: TagInterface;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
