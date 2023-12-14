import { PostService } from './05-dependency-b';
import { JsonDatabaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDatabaseService();
    const provider = new WebApiPostService();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();