import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Todo extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, default: false })
  finished: boolean;
}
export const TodoSchema = SchemaFactory.createForClass(Todo);
