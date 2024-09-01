export class IUser {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  token?: string;
}

export interface IUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserResponseData[];
  support: IUserResponseSupport;
}

export interface IUserResponseData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserResponseSupport {
  url: string;
  text: string;
}
