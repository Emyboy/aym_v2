import { PostItem } from "./Post.types";
import { UserPremission } from "./UserPremission.types";


export interface CommentTypes {
    id: number;
    isNew?: boolean;
    comment_text: string;
    users_permissions_user: UserPremission;
    post: PostItem;
    created_at: string;
}

