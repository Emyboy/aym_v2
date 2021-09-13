

export interface AuthStateType {
    user: UserPermission;
}

export interface UserPermission {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar_url: string;
    bio: string;
};

