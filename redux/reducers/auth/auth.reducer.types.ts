

export interface AuthStateType {
    user: UserPremission | null;
}

export interface UserPremission {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
};

