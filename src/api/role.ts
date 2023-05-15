import request from "@/utils/request";
import { AxiosResponse } from "axios";


export function getRoles(data: { page: number, limit: number }): Promise<AxiosResponse<any>> {
  return request.get('/users', { params: data })
}
