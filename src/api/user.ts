import request from "@/utils/request";

export async function getUser() {
  return await request.get('/user')
}
