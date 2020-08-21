import { Test } from '@nestjs/testing';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';
import { Tag } from './tag.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('TagService', () => {
  let tagResolver: TagResolver;
  const mockTagModel = {};

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        TagService,
        TagResolver,
        {
          provide: getModelToken(Tag.name),
          useValue: mockTagModel,
        },
      ],
    }).compile();

    tagResolver = moduleRef.get<TagResolver>(TagResolver);
  });

  describe('find all tags', () => {
    const mockedTags = [{ id: 'qwert', name: 'dasdds' }];

    it('Should return an array of tags', async () => {
      jest
        .spyOn(tagResolver, 'tags')
        .mockImplementation(() => Promise.resolve(mockedTags));

      expect(await tagResolver.tags()).toBe(mockedTags);
    });
  });
});
