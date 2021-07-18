import { UserPremission } from "./UserPremission.types";

export interface PostItem {
    id: number;
    title: string;
    description: string;
    body: string;
    src: string;
    category: PostCategory;
    categories: PostCategory[];
    users_permissions_user: UserPremission;
    created_at: string;
    storage_id: string;
    content_type: string;
    image_url: string;
};

export interface PostCategory {
    id: number;
    name: string;
}
