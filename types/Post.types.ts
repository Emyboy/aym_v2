import { UserPermission } from "./UserPermission.types";

export interface PostItem {
    id: number;
    title: string;
    description: string;
    body: string;
    src: string;
    category: PostCategory;
    categories: PostCategory[];
    users_permissions_user: UserPermission;
    created_at: string;
    storage_id: string;
    content_type: string;
    image_url: string;
    published_at: string;
    updated_at: string;
};

export interface PostCategory {
    id: number;
    name: string;
}
