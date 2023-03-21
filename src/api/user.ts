import request from "@/utils/request";

export  function getUser() {
  return request.get('/file/list')
}
