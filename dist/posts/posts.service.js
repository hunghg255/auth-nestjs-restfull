"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const faker_1 = require("@faker-js/faker");
const common_1 = require("@nestjs/common");
const posts_1 = require("../mock-data/posts");
const tags_1 = require("../mock-data/tags");
let PostsService = class PostsService {
    getTags() {
        return tags_1.tags;
    }
    getPosts(req) {
        var _a, _b, _c, _d, _e, _f;
        let data = posts_1.postDummy[req.username];
        const queryPage = +((_a = req.query) === null || _a === void 0 ? void 0 : _a.page) || 1;
        const page = queryPage <= 1 ? 1 : queryPage;
        if (((_b = req.query) === null || _b === void 0 ? void 0 : _b.title) || ((_c = req.query) === null || _c === void 0 ? void 0 : _c.tags)) {
            const postFilter = ((_e = (_d = posts_1.postDummy[req.username]) === null || _d === void 0 ? void 0 : _d.posts) === null || _e === void 0 ? void 0 : _e.filter((item) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                if (((_a = req.query) === null || _a === void 0 ? void 0 : _a.title) && ((_b = req.query) === null || _b === void 0 ? void 0 : _b.tags)) {
                    return (((_c = item === null || item === void 0 ? void 0 : item.title) === null || _c === void 0 ? void 0 : _c.startsWith((_d = req.query) === null || _d === void 0 ? void 0 : _d.title)) &&
                        ((_e = item === null || item === void 0 ? void 0 : item.tags) === null || _e === void 0 ? void 0 : _e.includes((_f = req.query) === null || _f === void 0 ? void 0 : _f.tags)));
                }
                return (((_g = item === null || item === void 0 ? void 0 : item.title) === null || _g === void 0 ? void 0 : _g.startsWith((_h = req.query) === null || _h === void 0 ? void 0 : _h.title)) ||
                    ((_j = item === null || item === void 0 ? void 0 : item.tags) === null || _j === void 0 ? void 0 : _j.includes((_k = req.query) === null || _k === void 0 ? void 0 : _k.tags)));
            })) || [];
            data = Object.assign(Object.assign({}, data), { posts: postFilter.slice((page - 1) * 10, data.page_size * page), current_page: page, total_page: Math.ceil((postFilter === null || postFilter === void 0 ? void 0 : postFilter.length) / 10), total: (postFilter === null || postFilter === void 0 ? void 0 : postFilter.length) || 0 });
        }
        else {
            data = Object.assign(Object.assign({}, data), { posts: data.posts.slice((page - 1) * 10, data.page_size * page), current_page: page, total: ((_f = data.posts) === null || _f === void 0 ? void 0 : _f.length) || 0 });
        }
        return data;
    }
    createPost(username, body) {
        var _a;
        if ((body === null || body === void 0 ? void 0 : body.title) && (body === null || body === void 0 ? void 0 : body.description)) {
            const bodyData = Object.assign({ id: faker_1.faker.datatype.uuid() }, body);
            posts_1.postDummy[username].posts.unshift(bodyData);
            posts_1.postDummy[username] = Object.assign(Object.assign({}, posts_1.postDummy[username]), { current_page: 1, total_page: Math.ceil(posts_1.postDummy[username].posts.length / 10), total: (_a = posts_1.postDummy[username].posts) === null || _a === void 0 ? void 0 : _a.length });
            return body;
        }
        return {
            message: 'title, description is required',
        };
    }
    editPost(username, params, body) {
        posts_1.postDummy[username].posts = posts_1.postDummy[username].posts.map((item) => {
            let newItem = Object.assign({}, item);
            if (newItem.id === params.postId) {
                newItem = Object.assign(Object.assign({}, newItem), body);
            }
            return newItem;
        });
        return body;
    }
    deletePost(username, params) {
        var _a;
        posts_1.postDummy[username].posts = posts_1.postDummy[username].posts.filter((item) => item.id !== params.postId);
        posts_1.postDummy[username] = Object.assign(Object.assign({}, posts_1.postDummy[username]), { current_page: 1, total_page: Math.ceil(posts_1.postDummy[username].posts.length / 10), total: (_a = posts_1.postDummy[username].posts) === null || _a === void 0 ? void 0 : _a.length });
        return params === null || params === void 0 ? void 0 : params.postId;
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)()
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map