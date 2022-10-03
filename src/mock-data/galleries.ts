import { faker } from '@faker-js/faker';

export const galleries = [
  {
    id: faker.datatype.uuid(),
    desctiption: faker.lorem.paragraph(),
    imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=1',
  },
  {
    id: faker.datatype.uuid(),
    desctiption: faker.lorem.paragraph(),
    imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=2',
  },
  {
    id: faker.datatype.uuid(),
    desctiption: faker.lorem.paragraph(),
    imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=3',
  },
  {
    id: faker.datatype.uuid(),
    desctiption: faker.lorem.paragraph(),
    imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=4',
  },
  {
    id: faker.datatype.uuid(),
    desctiption: faker.lorem.paragraph(),
    imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=5',
  },
];
