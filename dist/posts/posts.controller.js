"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createPosts_dto_1 = require("./dto/createPosts.dto");
const getPost_dto_1 = require("./dto/getPost.dto");
const posts_service_1 = require("./posts.service");
let PostsController = class PostsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    getTags() {
        return this.postsService.getTags();
    }
    getPosts(request) {
        return this.postsService.getPosts(request);
    }
    createPost(request, body) {
        return this.postsService.createPost(request === null || request === void 0 ? void 0 : request.username, body);
    }
    editPost(params, request, body) {
        return this.postsService.editPost(request === null || request === void 0 ? void 0 : request.username, params, body);
    }
    deletePost(params, request) {
        return this.postsService.deletePost(request === null || request === void 0 ? void 0 : request.username, params);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'tags',
        summary: 'Get tags',
        description: 'Get tags',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('tags'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getTags", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'posts',
        summary: 'Get posts',
        description: 'Get post',
    }),
    (0, swagger_1.ApiQuery)({ type: getPost_dto_1.getPostsDtoReq }),
    (0, swagger_1.ApiResponse)({ type: getPost_dto_1.getPostsDtoRes }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'craetePosts',
        summary: 'Create new post',
        description: 'Create new post',
    }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiBody)({ type: createPosts_dto_1.createPostsDtoReq }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'editPosts',
        summary: 'Edit post',
        description: 'Edit post',
    }),
    (0, swagger_1.ApiParam)({ name: 'postId', example: 'abc' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Patch)(':postId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "editPost", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        operationId: 'deletePost',
        summary: 'Delete post',
        description: 'Delete post',
    }),
    (0, swagger_1.ApiParam)({ name: 'postId', example: 'abc' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':postId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map