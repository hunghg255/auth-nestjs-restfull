import { tags } from './tags';
import { faker } from '@faker-js/faker';

const genPost = () => {
  return {
    posts: new Array(30).fill(null).map((it) => ({
      id: faker.datatype.uuid(),
      title: faker.word.adjective(),
      description: faker.lorem.paragraph(),
      tags: [
        faker.helpers.arrayElement(tags),
        faker.helpers.arrayElement(tags),
      ],
    })),
    current_page: 1,
    total_page: 3,
    page_size: 10,
    total: 30,
  };
};

export const postDummy = {
  admin: genPost(),

  admin1: genPost(),

  admin2: genPost(),

  adminRefresh: genPost(),

  adminRefresh1: genPost(),

  adminRefresh2: genPost(),
};
