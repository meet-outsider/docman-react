import request from "@/utils/request";
import { AxiosResponse } from "axios";

export function Login(data: { username: string, password: string }): Promise<AxiosResponse<any>> {
  return request.post("/login", data);
}

export function registry(data: any): Promise<AxiosResponse<any>> {
  return request.post("/registry", data);
}

export function info(): Promise<AxiosResponse<any>> {
  return request.get('/info')
}

export function getUsers(data: { page: number, limit: number }): Promise<AxiosResponse<any>> {
  return request.get('/users', { params: data })
}

export function getUserById(data: { page: number, limit: number }): Promise<AxiosResponse<any>> {
  return request.get('/users', { params: data })
}

export function updateUserById(id: number, data: any): Promise<AxiosResponse<any>> {
  return request.put('/users', data)
}

export function deleteUsersById(data: { IDs: readonly number[] }): Promise<AxiosResponse<any>> {
  return request.del('/users', data)
}
