interface IUser {
    id: string;
    username: string;
    avatar: string;
    roles: []
}
interface IRole {
    id: string;
    name: string;
}
interface IPermission {
    id: string;
    name: string;
}