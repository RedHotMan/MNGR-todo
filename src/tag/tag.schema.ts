import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tag extends Document {
  @Prop()
  id: string;

  @Prop({ requied: true })
  name: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
