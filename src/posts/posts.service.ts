import { Injectable } from '@nestjs/common';

import CreatePostDTO from './dto/createPost.dto';
import UpdatePostDTO from './dto/updatePost.dto';

@Injectable()
export default class PostsService {
    private posts = [
        { id: 1, title: 'First', content: 'First Content' },
        { id: 2, title: 'First', content: 'First Content' },
        { id: 3, title: 'First', content: 'First Content' }
    ]

    getAllPosts() {
        return this.posts
    }

    getPostById(id: number) {
        return this.posts.find(post => post.id === id)
    }

    async createPost(post: CreatePostDTO) {
        const newPost = {...post, id: this.posts.length + 1}
        this.posts.push(newPost)
        return newPost
    }

    replacePost(postId: number, postBody: UpdatePostDTO) {
        const postIndexToUpdate = this.posts.findIndex(post => post.id === postId)
        this.posts[postIndexToUpdate] = postBody
        return this.posts[postIndexToUpdate]
    }

    deletePost(postId: number) {
        const postIndexToUpdate = this.posts.findIndex(post => post.id === postId)
        this.posts.splice(postIndexToUpdate, 1)
    }
}