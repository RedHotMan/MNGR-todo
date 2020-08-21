import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Tag as TagInterface } from '../graphql';
import { TagService } from './tag.service';

@Resolver('Tag')
export class TagResolver {
  constructor(private tagService: TagService) {}

  @Query()
  async tags(): Promise<TagInterface[]> {
    return await this.tagService.findAll();
  }

  @Mutation()
  async createTag(@Args('name') name: string): Promise<TagInterface> {
    return await this.tagService.createTag(name);
  }
}
