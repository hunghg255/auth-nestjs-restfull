"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDummy = void 0;
const tags_1 = require("./tags");
const faker_1 = require("@faker-js/faker");
exports.postDummy = {
    admin: {
        posts: new Array(30).fill(null).map((it) => ({
            id: faker_1.faker.datatype.uuid(),
            title: faker_1.faker.word.adjective(),
            description: faker_1.faker.lorem.paragraph(),
            tags: [
                faker_1.faker.helpers.arrayElement(tags_1.tags),
                faker_1.faker.helpers.arrayElement(tags_1.tags),
            ],
        })),
        current_page: 1,
        total_page: 3,
        page_size: 10,
        total: 30,
    },
    admin1: {
        posts: new Array(30).fill(null).map((it) => ({
            id: faker_1.faker.datatype.uuid(),
            title: faker_1.faker.word.adjective(),
            description: faker_1.faker.lorem.paragraph(),
            tags: [
                faker_1.faker.helpers.arrayElement(tags_1.tags),
                faker_1.faker.helpers.arrayElement(tags_1.tags),
            ],
        })),
        current_page: 1,
        total_page: 3,
        page_size: 10,
        total: 30,
    },
    admin2: {
        posts: new Array(30).fill(null).map((it) => ({
            id: faker_1.faker.datatype.uuid(),
            title: faker_1.faker.word.adjective(),
            description: faker_1.faker.lorem.paragraph(),
            tags: [
                faker_1.faker.helpers.arrayElement(tags_1.tags),
                faker_1.faker.helpers.arrayElement(tags_1.tags),
            ],
        })),
        current_page: 1,
        total_page: 3,
        page_size: 10,
        total: 30,
    },
    adminRefresh: {
        posts: new Array(30).fill(null).map((it) => ({
            id: faker_1.faker.datatype.uuid(),
            title: faker_1.faker.word.adjective(),
            description: faker_1.faker.lorem.paragraph(),
            tags: [
                faker_1.faker.helpers.arrayElement(tags_1.tags),
                faker_1.faker.helpers.arrayElement(tags_1.tags),
            ],
        })),
        current_page: 1,
        total_page: 3,
        page_size: 10,
        total: 30,
    },
    adminRefresh1: {
        posts: new Array(30).fill(null).map((it) => ({
            id: faker_1.faker.datatype.uuid(),
            title: faker_1.faker.word.adjective(),
            description: faker_1.faker.lorem.paragraph(),
            tags: [
                faker_1.faker.helpers.arrayElement(tags_1.tags),
                faker_1.faker.helpers.arrayElement(tags_1.tags),
            ],
        })),
        current_page: 1,
        total_page: 3,
        page_size: 10,
        total: 30,
    },
    adminRefresh2: {
        posts: new Array(30).fill(null).map((it) => ({
            id: faker_1.faker.datatype.uuid(),
            title: faker_1.faker.word.adjective(),
            description: faker_1.faker.lorem.paragraph(),
            tags: [
                faker_1.faker.helpers.arrayElement(tags_1.tags),
                faker_1.faker.helpers.arrayElement(tags_1.tags),
            ],
        })),
        current_page: 1,
        total_page: 3,
        page_size: 10,
        total: 30,
    },
};
//# sourceMappingURL=posts.js.map