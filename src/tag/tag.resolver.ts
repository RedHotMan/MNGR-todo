import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Tag } from './tag.schema';
import { TagService } from './tag.service';

@Resolver('Tag')
export class TagResolver {
  constructor(private tagService: TagService) {}

  @Query()
  async tags(): Promise<Tag[]> {
    return await this.tagService.findAll();
  }

  @Mutation()
  async createTag(@Args('name') name: string): Promise<Tag> {
    return await this.tagService.createTag(name);
  }
}
