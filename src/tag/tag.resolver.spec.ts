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
    const mockedTags = [{ id: 'qwerty', name: 'Family' }];

    it('Should return an array of tags', async () => {
      jest
        .spyOn(tagResolver, 'tags')
        .mockImplementation(() => Promise.resolve(mockedTags));

      expect(await tagResolver.tags()).toBe(mockedTags);
    });
  });

  describe('create a Tag and return its value', () => {
    const mockedTag = { id: 'qwerty', name: 'Work' };

    it('should return a single new Tag', async () => {
      jest
        .spyOn(tagResolver, 'createTag')
        .mockImplementation(() => Promise.resolve(mockedTag));

      expect(await await tagResolver.createTag(mockedTag.name)).toBe(mockedTag);
    });
  });
});
