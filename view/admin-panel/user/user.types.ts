// to do: rewrite Category

export interface User {
    id: string
    email: string
    username: string
    password: string
}

export type UserResponse = Omit<User, 'password'>

export interface AdminUserViewProps {
    user: UserResponse
}

export type AddUserInput = Omit<User, 'id'>

export type UpdateUserInput = Omit<UserResponse, 'id'>

export interface ChangeUserPassInput {
    oldPassword: string
    password: string
    confirmPassword: string
}

export enum UserPanelTabEnum {
    PROFILE = 'profile',
    PASSWORD = 'password',
    ADD_ADMIN = 'add_admin',
}
