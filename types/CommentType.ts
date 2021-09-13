import { PostItem } from "./Post.types";
import { UserPermission } from "./UserPermission.types";


export interface CommentTypes {
    id: number;
    isNew?: boolean;
    comment_text: string;
    users_permissions_user: UserPermission;
    post: PostItem;
    created_at: string;
}

