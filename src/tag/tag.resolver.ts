import { Resolver, Query } from '@nestjs/graphql';
import { Tag } from './tag.schema';
import { TagService } from './tag.service';

@Resolver('Tag')
export class TagResolver {
  constructor(private tagService: TagService) {}

  @Query()
  async tags(): Promise<Tag[]> {
    return await this.tagService.findAll();
  }
}
