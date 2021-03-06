import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: () => false })
  finished: boolean;

  @Prop({ required: true })
  tagId: string;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
