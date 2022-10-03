"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.galleries = void 0;
const faker_1 = require("@faker-js/faker");
exports.galleries = [
    {
        id: faker_1.faker.datatype.uuid(),
        desctiption: faker_1.faker.lorem.paragraph(),
        imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=1',
    },
    {
        id: faker_1.faker.datatype.uuid(),
        desctiption: faker_1.faker.lorem.paragraph(),
        imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=2',
    },
    {
        id: faker_1.faker.datatype.uuid(),
        desctiption: faker_1.faker.lorem.paragraph(),
        imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=3',
    },
    {
        id: faker_1.faker.datatype.uuid(),
        desctiption: faker_1.faker.lorem.paragraph(),
        imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=4',
    },
    {
        id: faker_1.faker.datatype.uuid(),
        desctiption: faker_1.faker.lorem.paragraph(),
        imageUrl: 'https://source.unsplash.com/collection/1758353/800x350/?sig=5',
    },
];
//# sourceMappingURL=galleries.js.map