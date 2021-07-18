

export interface AuthStateType {
    user: UserPremission;
}

export interface UserPremission {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar_url: string;
    bio: string;
};

