interface IRole {
  name: string;
}

interface IUser {
  id: number;
  username: string;
  nickname: string;
  email: string;
  phone: number;
  createdAt: string;
  roles: IRole[];
}

interface IPermission {
  id: string;
  name: string;
}
