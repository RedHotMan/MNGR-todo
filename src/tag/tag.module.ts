import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';
import { Tag, TagSchema } from './tag.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }])],
  providers: [TagResolver, TagService],
})
export class TagModule {}
