import request from "@/app/utils/request";
import { AxiosResponse } from "axios";

export function Login(data: { username: string, password: string }): Promise<AxiosResponse<any>> {
  return request.post("/login", data);
}

export function registry(data: any) {
  return request.post("/registry", data);
}

export function getUsers() {
  return request.get('/users')
}
