import { Comment } from "./comment.model";

export class Post {
    public title:string;
    public body:string;
    public comments?:Comment[] = [];
}