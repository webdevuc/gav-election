export interface User {
    id: string;
    name: string;
    mobileNo?: string;
    email?: string;
    avatar?: string;
    status?: string;
    role?: string;
    deviceId?: string,
    isLoggedIn?: boolean,
    isDelete?: boolean
}
