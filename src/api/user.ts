import request from "@/app/utils/request";
import { AxiosResponse } from "axios";

export function Login(data: { username: string, password: string }): Promise<AxiosResponse<any>> {
  return request.post("/login", data);
}

export function registry(data: any): Promise<AxiosResponse<any>> {
  return request.post("/registry", data);
}

export function getUsers(data: { page: number, limit: number }): Promise<AxiosResponse<any>> {
  return request.get('/users', { params: data })
}
